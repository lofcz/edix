[**API**](../API.md)

***

# Function: HistoryRestoring()

> **HistoryRestoring**(`editor`): `boolean`

Defined in: [plugins/history.ts:160](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/plugins/history.ts#L160)

Whether the current `change` is from [Undo](Undo.md) / [Redo](Redo.md).

`change` is flushed on a microtask after restore. This stays `true` until
that flush finishes so hosts can skip auto-transforms instead of
inferring intent from operation types.

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)

## Returns

`boolean`
