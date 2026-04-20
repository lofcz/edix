[**API**](../API.md)

***

# Function: ToggleFormat()

> **ToggleFormat**\<`T`\>(`this`, `key`, `range`): `void`

Defined in: [commands.ts:106](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/commands.ts#L106)

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
