[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:178](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L178)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

> **apply**(`op`): `this`

Defined in: [editor.ts:190](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L190)

Dispatches editing operations.

#### Parameters

##### op

[`Operation`](../type-aliases/Operation.md) \| [`Operation`](../type-aliases/Operation.md)[]

[Operation](../type-aliases/Operation.md)

#### Returns

`this`

***

### exec()

#### Call Signature

> **exec**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:196](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L196)

Executes a function with editor bound as context.

##### Type Parameters

###### A

`A` *extends* `unknown`[]

##### Parameters

###### fn

`EditorCommandOrPlugin`\<`A`, `T`\>

EditorCommandOrPlugin or EditorQuery

###### args

...`A`

arguments of the function

##### Returns

`this`

#### Call Signature

> **exec**\<`A`, `V`\>(`fn`, ...`args`): `V`

Defined in: [editor.ts:197](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L197)

##### Type Parameters

###### A

`A` *extends* `unknown`[]

###### V

`V`

##### Parameters

###### fn

`EditorQuery`\<`A`, `V`, `T`\>

###### args

...`A`

##### Returns

`V`

***

### on()

> **on**\<`K`\>(`key`, `callback`): () => `void`

Defined in: [editor.ts:202](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L202)

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

Defined in: [editor.ts:210](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L210)

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

### get()

> **get**\<`V`\>(`key`): `V`

Defined in: [editor.ts:217](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L217)

Get a value from the context.

#### Type Parameters

##### V

`V`

#### Parameters

##### key

[`EditorContext`](../type-aliases/EditorContext.md)\<`V`\>

#### Returns

`V`

***

### set()

> **set**\<`V`\>(`key`, `value`): `this`

Defined in: [editor.ts:221](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L221)

Set a value for the context.

#### Type Parameters

##### V

`V`

#### Parameters

##### key

[`EditorContext`](../type-aliases/EditorContext.md)\<`V`\>

##### value

`V`

#### Returns

`this`

## Properties

### doc

> `readonly` **doc**: `T`

Defined in: [editor.ts:179](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L179)

***

### selection

> **selection**: `Selection`

Defined in: [editor.ts:180](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L180)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:185](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L185)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:226](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/editor.ts#L226)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
