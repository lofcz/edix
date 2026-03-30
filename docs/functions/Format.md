[**API**](../API.md)

***

# Function: Format()

> **Format**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `range`): `void`

Defined in: [commands.ts:83](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/commands.ts#L83)

Format content in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `Omit`\<`InferNode`\<`T`\>, `"text"`\>

### K

`K` *extends* `string`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### value

`N`\[`K`\]

### range

`PositionRange` = `...`

## Returns

`void`
