import { defineConfig } from "vitest/config";
import type { BrowserCommand } from "vitest/node";
import { playwright } from "@vitest/browser-playwright";

const mouseDrag: BrowserCommand<
  [from: [x: number, y: number], to: [x: number, y: number]]
> = async ({ page }, [fromX, fromY], [toX, toY]) => {
  const iframe = await page.locator("iframe[data-vitest]").boundingBox();
  const offsetX = iframe?.x ?? 0;
  const offsetY = iframe?.y ?? 0;
  await page.mouse.move(offsetX + fromX, offsetY + fromY);
  await page.mouse.down();
  await new Promise((resolve) => setTimeout(resolve, 250));
  await page.mouse.move(offsetX + toX, offsetY + toY);
  await page.mouse.up();
};

export default defineConfig({
  test: {
    root: "src",
    clearMocks: true,
    projects: [
      {
        test: {
          name: "unit",
          environment: "node",
          exclude: ["**/*.browser.{test,spec}.{ts,tsx}"],
          typecheck: { enabled: true, tsconfig: "../tsconfig.json" },
        },
      },
      {
        test: {
          name: "browser",
          include: ["**/*.browser.{test,spec}.{ts,tsx}"],
          browser: {
            enabled: true,
            headless: true,
            viewport: { width: 1280, height: 720 },
            provider: playwright({
              contextOptions: {
                permissions: ["clipboard-read", "clipboard-write"],
              },
            }),
            instances: [{ browser: "chromium" }],
            screenshotFailures: false,
            commands: { mouseDrag },
          },
        },
      },
    ],
  },
});
