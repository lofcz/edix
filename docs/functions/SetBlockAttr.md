[**API**](../API.md)

***

# Function: SetBlockAttr()

> **SetBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `path`): `void`

Defined in: [commands.ts:130](https://github.com/inokawa/edix/blob/8e6d90067f2f7175e9c6e67138fe753f07f08c94/src/commands.ts#L130)

Set attr to a block node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `Omit`\<`InferBlockNode`\<`T`\>, `"text"`\>

### K

`K` *extends* `string`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### value

`N`\[`K`\]

### path

`Path` = `...`

## Returns

`void`
