[**API**](../API.md)

***

# Function: ToggleBlockAttr()

> **ToggleBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `onValue`, `offValue`, `path`): `void`

Defined in: [commands.ts:142](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/commands.ts#L142)

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
