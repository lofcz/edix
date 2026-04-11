[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:159](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L159)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

#### Call Signature

> **apply**(`tr`, `immediate?`): `this`

Defined in: [editor.ts:182](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L182)

Dispatches editing operations.

##### Parameters

###### tr

[`Transaction`](../classes/Transaction.md)

[Transaction](../classes/Transaction.md) or EditorCommand

###### immediate?

`boolean`

If true, flushes queued operations immediately.

##### Returns

`this`

#### Call Signature

> **apply**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:183](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L183)

##### Type Parameters

###### A

`A` *extends* `unknown`[]

##### Parameters

###### fn

`EditorCommand`\<`A`, `T`\>

###### args

...`A`

##### Returns

`this`

## Properties

### doc

> `readonly` **doc**: `T`

Defined in: [editor.ts:160](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L160)

***

### isEmpty

> `readonly` **isEmpty**: `boolean`

Defined in: [editor.ts:165](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L165)

Whether the document is empty (no text content, no void nodes).
Recomputed once per commit — O(1) read.

***

### selection

> **selection**: `SelectionSnapshot`

Defined in: [editor.ts:166](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L166)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:171](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L171)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### autoScroll

> **autoScroll**: `boolean`

Defined in: [editor.ts:175](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L175)

Enable/disable auto-scroll after document changes.

***

### input()

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:188](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L188)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

> (): `void`

##### Returns

`void`
