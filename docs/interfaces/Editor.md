[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:163](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L163)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

#### Call Signature

> **apply**(`tr`): `this`

Defined in: [editor.ts:176](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L176)

Dispatches editing operations.

##### Parameters

###### tr

[`Transaction`](../classes/Transaction.md)

[Transaction](../classes/Transaction.md) or EditorCommand

##### Returns

`this`

#### Call Signature

> **apply**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:177](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L177)

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

Defined in: [editor.ts:182](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L182)

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

() => `void`

***

### hook()

> **hook**\<`K`\>(`key`, `callback`): () => `void`

Defined in: [editor.ts:190](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L190)

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

() => `void`

***

### use()

> **use**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:202](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L202)

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

Defined in: [editor.ts:164](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L164)

***

### selection

> `readonly` **selection**: `SelectionSnapshot`

Defined in: [editor.ts:165](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L165)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:170](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L170)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:198](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/editor.ts#L198)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
