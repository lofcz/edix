[**API**](../API.md)

***

# Interface: DirtyRange

Defined in: [presets/plain.ts:15](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L15)

Describes which lines changed between two document snapshots.
Starting at line `start`, `oldCount` lines were replaced with `newCount` lines.
`lines` contains the text content of the new lines in the dirty window.

## Properties

### start

> **start**: `number`

Defined in: [presets/plain.ts:16](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L16)

***

### oldCount

> **oldCount**: `number`

Defined in: [presets/plain.ts:17](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L17)

***

### newCount

> **newCount**: `number`

Defined in: [presets/plain.ts:18](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L18)

***

### lines

> **lines**: `string`[]

Defined in: [presets/plain.ts:19](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L19)
