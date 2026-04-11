param(
  [string]$Token = $env:NPM_TOKEN,
  [string]$Otp,
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Write-Step {
  param([string]$Message)
  Write-Host ""
  Write-Host "==> $Message" -ForegroundColor Cyan
}

function Publish-Package {
  param(
    [string]$PackageName,
    [string]$PackagePath,
    [string]$OtpCode
  )

  Write-Step "Publishing $PackageName"
  Push-Location $PackagePath
  try {
    $publishArgs = @("publish", "--access", "public")
    if ($OtpCode) {
      $publishArgs += @("--otp", $OtpCode)
    }

    $publishOutput = & npm @publishArgs 2>&1
    $publishExitCode = $LASTEXITCODE
    $publishText = ($publishOutput | Out-String)

    if ($publishExitCode -ne 0) {
      if ($publishText -match "previously published versions") {
        Write-Host "$PackageName is already published at this version; skipping." -ForegroundColor Yellow
        return
      }

      throw "npm publish failed for $PackageName with exit code $publishExitCode`n$publishText"
    }

    $publishOutput
    Write-Host "Published $PackageName" -ForegroundColor Green
  }
  finally {
    Pop-Location
  }
}

function Test-PackageVisibility {
  param(
    [string]$PackageName,
    [int]$MaxAttempts = 12,
    [int]$DelaySeconds = 10
  )

  for ($attempt = 1; $attempt -le $MaxAttempts; $attempt++) {
    $versionOutput = & npm view $PackageName version 2>$null
    if ($LASTEXITCODE -eq 0 -and $versionOutput) {
      Write-Host "$PackageName visible on npm as version $versionOutput" -ForegroundColor Green
      return $true
    }

    if ($attempt -lt $MaxAttempts) {
      Write-Host "Waiting for npm metadata to propagate for $PackageName (attempt $attempt/$MaxAttempts)..." -ForegroundColor Yellow
      Start-Sleep -Seconds $DelaySeconds
    }
  }

  return $false
}

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootPackageJson = Join-Path $repoRoot "package.json"
if (-not (Test-Path $rootPackageJson)) {
  throw "Could not find package.json next to bootstrap-publish.ps1"
}

$packages = @(
  @{ Name = "@lofcz/edix"; Path = "." }
)

$npmrcPath = Join-Path $repoRoot ".npmrc"
$backupNpmrcPath = Join-Path $repoRoot ".npmrc.bootstrap-backup"
$wroteTempNpmrc = $false
$createdBackup = $false

try {
  Set-Location $repoRoot

  if ($Token) {
    Write-Step "Configuring temporary npm auth"
    $env:NPM_TOKEN = $Token

    if (Test-Path $npmrcPath) {
      Copy-Item $npmrcPath $backupNpmrcPath -Force
      $createdBackup = $true
    }

    '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' | Out-File -FilePath $npmrcPath -Encoding ascii
    $wroteTempNpmrc = $true
  }
  else {
    Write-Host "No token provided. Continuing without writing .npmrc." -ForegroundColor Yellow
    Write-Host "If npm requires auth, use -Token or set `$env:NPM_TOKEN first." -ForegroundColor Yellow
  }

  if (-not $SkipBuild) {
    Write-Step "Building package"
    & npm run build
    if ($LASTEXITCODE -ne 0) {
      throw "npm run build failed with exit code $LASTEXITCODE"
    }
  }

  foreach ($pkg in $packages) {
    Publish-Package -PackageName $pkg.Name -PackagePath (Join-Path $repoRoot $pkg.Path) -OtpCode $Otp
  }

  Write-Step "Verifying published versions"
  $missingFromView = @()
  foreach ($pkg in $packages) {
    $isVisible = Test-PackageVisibility -PackageName $pkg.Name
    if (-not $isVisible) {
      $missingFromView += $pkg.Name
    }
  }

  if ($missingFromView.Count -gt 0) {
    Write-Host ""
    Write-Host "Publish completed, but npm view is still returning 404 for:" -ForegroundColor Yellow
    foreach ($name in $missingFromView) {
      Write-Host " - $name" -ForegroundColor Yellow
    }
    Write-Host "This is usually just registry propagation delay. Check the npm package pages directly and rerun npm view later." -ForegroundColor Yellow
  }

  Write-Host ""
  Write-Host "Bootstrap publish completed successfully." -ForegroundColor Green
}
finally {
  if ($wroteTempNpmrc -and (Test-Path $npmrcPath)) {
    Remove-Item $npmrcPath -Force
  }

  if ($createdBackup -and (Test-Path $backupNpmrcPath)) {
    Move-Item $backupNpmrcPath $npmrcPath -Force
  }

  if (Test-Path $backupNpmrcPath) {
    Remove-Item $backupNpmrcPath -Force
  }
}
