[**API**](../API.md)

***

# Function: ToggleFormat()

> **ToggleFormat**\<`T`\>(`this`, `key`, `range`): `void`

Defined in: [commands.ts:108](https://github.com/inokawa/edix/blob/8e6d90067f2f7175e9c6e67138fe753f07f08c94/src/commands.ts#L108)

Toggle formatting in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`Extract`\<`ToggleableKey`\<`Omit`\<`InferInlineNode`\<`T`\>, `"text"`\>\>, `string`\>

### range

`PositionRange` = `...`

## Returns

`void`
