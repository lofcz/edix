[**API**](../API.md)

***

# Function: ToggleBlockAttr()

> **ToggleBlockAttr**\<`T`, `N`, `K`\>(`editor`, `key`, `onValue`, `offValue`, `path?`): `void`

Defined in: [commands.ts:138](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/commands.ts#L138)

Toggle attr of block node at the caret or specified position.

## Type Parameters

### T

`T` *extends* `DocNode`

### N

`N` *extends* `DocNode` & BlockNode & InlineNode

### K

`K` *extends* `string`

## Parameters

### editor

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
