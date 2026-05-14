[**API**](../API.md)

***

# Function: ToggleFormat()

> **ToggleFormat**\<`T`\>(`this`, `key`, `range?`): `void`

Defined in: [commands.ts:106](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/commands.ts#L106)

Toggle formatting in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`Extract`\<`ToggleableKey`\<`Omit`\<`InferInlineNode`\<`T`\>, `"text"`\>\>, `string`\>

### range?

`Range` = `...`

## Returns

`void`
