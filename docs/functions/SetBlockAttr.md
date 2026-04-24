[**API**](../API.md)

***

# Function: SetBlockAttr()

> **SetBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `path`): `void`

Defined in: [commands.ts:131](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/commands.ts#L131)

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

### path

`Path` = `...`

## Returns

`void`
