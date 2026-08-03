[**API**](../API.md)

***

# Function: blockLockPlugin()

> **blockLockPlugin**\<`T`\>(`editor`, `options`): `void`

Defined in: [plugins/blockLock.ts:23](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/plugins/blockLock.ts#L23)

A plugin to make specific blocks read-only.

Locked blocks can still be selected and copied, but operations editing them are cancelled,
except ones that unlock the block and ones targeting the root (e.g. undo / redo).

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### options

#### isLocked

(`node`) => `boolean`

A function to check if the block is locked or not.

## Returns

`void`
