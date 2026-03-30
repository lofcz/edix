[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:152](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L152)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

#### Call Signature

> **apply**(`tr`, `immediate?`): `this`

Defined in: [editor.ts:166](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L166)

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

Defined in: [editor.ts:167](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L167)

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

Defined in: [editor.ts:153](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L153)

***

### selection

> **selection**: `SelectionSnapshot`

Defined in: [editor.ts:154](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L154)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:159](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L159)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### input()

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:172](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L172)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

> (): `void`

##### Returns

`void`
