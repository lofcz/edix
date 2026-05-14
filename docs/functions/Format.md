[**API**](../API.md)

***

# Function: Format()

> **Format**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `range?`): `void`

Defined in: [commands.ts:90](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/commands.ts#L90)

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

`Range` = `...`

## Returns

`void`
