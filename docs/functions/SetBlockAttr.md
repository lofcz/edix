[**API**](../API.md)

***

# Function: SetBlockAttr()

> **SetBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `path?`): `void`

Defined in: [commands.ts:132](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/commands.ts#L132)

Set attr to a block node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `DocNode` & BlockNode & InlineNode

### K

`K` *extends* `string`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### value

`N`\[`K`\]

### path?

`Path` = `...`

## Returns

`void`
