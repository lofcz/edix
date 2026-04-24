[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:162](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L162)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

#### Call Signature

> **apply**(`tr`): `this`

Defined in: [editor.ts:175](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L175)

Dispatches editing operations.

##### Parameters

###### tr

[`Transaction`](../classes/Transaction.md)

[Transaction](../classes/Transaction.md) or EditorCommand

##### Returns

`this`

#### Call Signature

> **apply**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:176](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L176)

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

> **on**\<`K`\>(`key`, `callback`): () => `void`

Defined in: [editor.ts:181](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L181)

A function to subscribe editor events.

#### Type Parameters

##### K

`K` *extends* keyof `EditorEventMap`

#### Parameters

##### key

`K`

##### callback

`EditorEventMap`\[`K`\]

#### Returns

cleanup function

> (): `void`

##### Returns

`void`

***

### hook()

> **hook**\<`K`\>(`key`, `callback`): () => `void`

Defined in: [editor.ts:189](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L189)

A function to register editor hooks.

#### Type Parameters

##### K

`K` *extends* keyof `EditorHookMap`

#### Parameters

##### key

`K`

##### callback

`EditorHookMap`\[`K`\]

#### Returns

cleanup function

> (): `void`

##### Returns

`void`

***

### use()

> **use**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:201](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L201)

A function to use editor plugins.

#### Type Parameters

##### A

`A` *extends* `unknown`[]

#### Parameters

##### fn

[`EditorPlugin`](../type-aliases/EditorPlugin.md)\<`A`, `T`\>

##### args

...`A`

#### Returns

`this`

## Properties

### doc

> `readonly` **doc**: `T`

Defined in: [editor.ts:163](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L163)

***

### selection

> `readonly` **selection**: `SelectionSnapshot`

Defined in: [editor.ts:164](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L164)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:169](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L169)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### input()

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:197](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/editor.ts#L197)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

> (): `void`

##### Returns

`void`
