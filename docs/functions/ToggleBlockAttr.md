[**API**](../API.md)

***

# Function: ToggleBlockAttr()

> **ToggleBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `onValue`, `offValue`, `path`): `void`

Defined in: [commands.ts:142](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/commands.ts#L142)

Toggle attr of block node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `DocNode` & BlockNode & InlineNode

### K

`K` *extends* `string`

## Parameters

### this

[`Editor`](../interfaces/Editor.md)\<`T`\>

### key

`K`

### onValue

`N`\[`K`\]

### offValue

`N`\[`K`\]

### path

`Path` = `...`

## Returns

`void`
