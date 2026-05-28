[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`editor`, `node`, `position?`): `void`

Defined in: [commands.ts:43](https://github.com/inokawa/editate/blob/8c5e3f110383ab480e353efdaee805b9eda93e1c/src/commands.ts#L43)

Insert node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### node

`Exclude`\<`InferInlineNode`\<`T`\>, `TextNode`\>

### position?

`number` = `...`

## Returns

`void`
