[**API**](../API.md)

***

# Function: BlocksInRange()

> **BlocksInRange**\<`T`\>(`editor`, `range?`): `Generator`\<\[[`InferLeafBlockNode`](../type-aliases/InferLeafBlockNode.md)\<`T`\>, `number`, `Range`\], `void`, `void`\>

Defined in: [queries.ts:37](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/queries.ts#L37)

Get leaf block nodes that intersect with the selection or specified range, with their offsets. An empty block is included wherever the range reaches it.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### range?

`Range` = `...`

## Returns

`Generator`\<\[[`InferLeafBlockNode`](../type-aliases/InferLeafBlockNode.md)\<`T`\>, `number`, `Range`\], `void`, `void`\>
