[**API**](../API.md)

***

# Function: SetBlockAttr()

> **SetBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `path?`): `void`

Defined in: [commands.ts:128](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/commands.ts#L128)

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
