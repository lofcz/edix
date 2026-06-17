[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`editor`, `node`, `position?`): `void`

Defined in: [commands.ts:43](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/commands.ts#L43)

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
