[**API**](../API.md)

***

# Function: ToggleBlockAttr()

> **ToggleBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `onValue`, `offValue`, `path?`): `void`

Defined in: [commands.ts:143](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/commands.ts#L143)

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

### path?

`Path` = `...`

## Returns

`void`
