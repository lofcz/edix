[**API**](../API.md)

***

# Function: ToggleBlockAttr()

> **ToggleBlockAttr**\<`T`, `N`, `K`\>(`this`, `key`, `onValue`, `offValue`, `path?`): `void`

Defined in: [commands.ts:139](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/commands.ts#L139)

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
