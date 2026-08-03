[**API**](../API.md)

***

# Function: SetVoidAttr()

> **SetVoidAttr**\<`T`, `N`, `K`\>(`editor`, `key`, `value`, `offset?`): `void`

Defined in: [commands.ts:213](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/commands.ts#L213)

Set attr to a void node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `VoidNode`

### K

`K` *extends* `string`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### value

`ExtractAttrValue`\<`N`, `K`\>

### offset?

`number` = `...`

## Returns

`void`
