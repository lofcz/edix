[**API**](../API.md)

***

# Function: ToggleFormat()

> **ToggleFormat**\<`T`\>(`this`, `key`, `range`): `void`

Defined in: [commands.ts:99](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/commands.ts#L99)

Toggle formatting in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`Extract`\<`ToggleableKey`\<`Omit`\<`InferNode`\<`T`\>, `"text"`\>\>, `string`\>

### range

`PositionRange` = `...`

## Returns

`void`
