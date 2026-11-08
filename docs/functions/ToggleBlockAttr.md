[**API**](../API.md)

***

# Function: ToggleBlockAttr()

> **ToggleBlockAttr**\<`T`, `N`, `K`\>(`editor`, `key`, `onValue`, `offValue`, `range?`): `void`

Defined in: [commands.ts:193](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/commands.ts#L193)

Toggle attr of block nodes in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `object` & `BlockNode` \| `object` & `BlockNode` \| `object` & `DocNode` \| `object` & `DocNode`

### K

`K` *extends* `string`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### onValue

`ExtractAttrValue`\<`N`, `K`\>

### offValue

`ExtractAttrValue`\<`N`, `K`\>

### range?

`Range` = `...`

## Returns

`void`
