[**API**](../API.md)

***

# Function: Format()

> **Format**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `range`): `void`

Defined in: [commands.ts:93](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/commands.ts#L93)

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

### range

`PositionRange` = `...`

## Returns

`void`
