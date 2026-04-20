[**API**](../API.md)

***

# Function: InsertNode()

> **InsertNode**\<`T`\>(`this`, `node`, `position`): `void`

Defined in: [commands.ts:46](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/commands.ts#L46)

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
