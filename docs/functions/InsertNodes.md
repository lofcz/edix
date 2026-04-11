[**API**](../API.md)

***

# Function: InsertNodes()

> **InsertNodes**\<`T`\>(`this`, `nodes`, `position`, `moveCaret`): `void`

Defined in: [commands.ts:54](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/commands.ts#L54)

Insert multiple inline nodes as a single line fragment in one transaction.
When `moveCaret` is true (default), the caret moves to the end of the
inserted content.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### nodes

`InferNode`\<`T`\>[]

### position

`Position` = `...`

### moveCaret

`boolean` = `true`

## Returns

`void`
