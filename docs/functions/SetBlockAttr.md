[**API**](../API.md)

***

# Function: SetBlockAttr()

> **SetBlockAttr**\<`T`, `N`, `K`\>(`editor`, `key`, `value`, `path?`): `void`

Defined in: [commands.ts:122](https://github.com/inokawa/editate/blob/8c5e3f110383ab480e353efdaee805b9eda93e1c/src/commands.ts#L122)

Set attr to a block node at the caret or specified position.

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

### value

`N`\[`K`\]

### path?

`Path` = `...`

## Returns

`void`
