[**API**](../API.md)

***

# Function: Format()

> **Format**\<`T`, `N`, `K`\>(`this`, `key`, `value`, `range`): `void`

Defined in: [commands.ts:102](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/commands.ts#L102)

Format content in the selection or specified range.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `Omit`\<`InferNode`\<`T`\>, `"text"`\>

### K

`K` *extends* `string`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### value

`N`\[`K`\]

### range

`PositionRange` = `...`

## Returns

`void`
