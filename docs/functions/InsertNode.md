[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`this`, `node`, `position`): `void`

Defined in: [commands.ts:41](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/commands.ts#L41)

Insert node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### node

`Exclude`\<`InferNode`\<`T`\>, `TextNode`\>

### position

`Position` = `...`

## Returns

`void`
