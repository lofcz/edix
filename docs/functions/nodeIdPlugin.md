[**API**](../API.md)

***

# Function: nodeIdPlugin()

> **nodeIdPlugin**\<`T`\>(`editor`): `void`

Defined in: [plugins/nodeId.ts:23](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/plugins/nodeId.ts#L23)

A plugin to give immutable document nodes stable identifiers suitable for renderer keys.

An id belongs to a node object and follows the node across edits.
A node recreated by an operation takes over the id of the node it was derived from.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

## Returns

`void`
