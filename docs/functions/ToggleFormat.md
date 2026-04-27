[**API**](../API.md)

***

# Function: ToggleFormat()

> **ToggleFormat**\<`T`\>(`this`, `key`, `range?`): `void`

Defined in: [commands.ts:110](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/commands.ts#L110)

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

`PositionRange` = `...`

## Returns

`void`
