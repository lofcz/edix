[**API**](../API.md)

***

# Function: ToggleFormat()

> **ToggleFormat**\<`T`\>(`this`, `key`, `range`): `void`

Defined in: [commands.ts:118](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/commands.ts#L118)

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
