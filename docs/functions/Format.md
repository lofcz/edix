[**API**](../API.md)

***

# Function: Format()

> **Format**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `range?`): `void`

Defined in: [commands.ts:94](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/commands.ts#L94)

Format content in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `Omit`\<`InferInlineNode`\<`T`\>, `"text"`\>

### K

`K` *extends* `string`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### value

`N`\[`K`\]

### range?

`PositionRange` = `...`

## Returns

`void`
