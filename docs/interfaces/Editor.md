[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:161](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L161)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

#### Call Signature

> **apply**(`tr`, `immediate?`): `this`

Defined in: [editor.ts:175](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L175)

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

Defined in: [editor.ts:176](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L176)

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

***

### on()

> **on**\<`K`\>(...`args`): () => `void`

Defined in: [editor.ts:181](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L181)

A function to subscribe editor events.

#### Type Parameters

##### K

`K` *extends* keyof `EditorEventMap`

#### Parameters

##### args

...`EditorEvent`\<`K`\>

#### Returns

cleanup function

> (): `void`

##### Returns

`void`

## Properties

### doc

> `readonly` **doc**: `T`

Defined in: [editor.ts:162](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L162)

***

### selection

> **selection**: `SelectionSnapshot`

Defined in: [editor.ts:163](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L163)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:168](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L168)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### input()

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:186](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/editor.ts#L186)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

> (): `void`

##### Returns

`void`
