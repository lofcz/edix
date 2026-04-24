[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`this`, `node`, `position`): `void`

Defined in: [commands.ts:49](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/commands.ts#L49)

Insert node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### node

`Exclude`\<`InferInlineNode`\<`T`\>, `TextNode`\>

### position

`Position` = `...`

## Returns

`void`
