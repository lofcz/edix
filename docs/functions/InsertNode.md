[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`this`, `node`, `position`): `void`

Defined in: [commands.ts:48](https://github.com/inokawa/edix/blob/8e6d90067f2f7175e9c6e67138fe753f07f08c94/src/commands.ts#L48)

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
