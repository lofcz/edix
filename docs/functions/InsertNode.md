[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`this`, `node`, `position?`): `void`

Defined in: [commands.ts:46](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/commands.ts#L46)

Insert node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### node

`Exclude`\<`InferInlineNode`\<`T`\>, `TextNode`\>

### position?

`Position` = `...`

## Returns

`void`
