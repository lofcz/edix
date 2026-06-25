[**API**](../API.md)

***

# Function: InsertNodes()

> **InsertNodes**\<`T`\>(`editor`, `nodes`, `position?`): `void`

Defined in: [commands.ts:61](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/commands.ts#L61)

Insert multiple inline nodes as a single line fragment in one transaction.

Fork-only command. Useful when a single insert needs to interleave text and
void nodes (e.g. mention chips) without splitting blocks.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### nodes

`InferInlineNode`\<`T`\>[]

### position?

`number` = `...`

## Returns

`void`
