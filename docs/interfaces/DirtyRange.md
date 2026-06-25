[**API**](../API.md)

***

# Interface: DirtyRange

Defined in: [presets/plain.ts:14](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/presets/plain.ts#L14)

Describes which lines changed between two document snapshots.
Starting at line `start`, `oldCount` lines were replaced with `newCount` lines.
`lines` contains the text content of the new lines in the dirty window.

## Properties

### start

> **start**: `number`

Defined in: [presets/plain.ts:15](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/presets/plain.ts#L15)

***

### oldCount

> **oldCount**: `number`

Defined in: [presets/plain.ts:16](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/presets/plain.ts#L16)

***

### newCount

> **newCount**: `number`

Defined in: [presets/plain.ts:17](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/presets/plain.ts#L17)

***

### lines

> **lines**: `string`[]

Defined in: [presets/plain.ts:18](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/presets/plain.ts#L18)
