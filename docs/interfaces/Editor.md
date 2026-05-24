[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:172](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L172)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

> **apply**(`tr`): `this`

Defined in: [editor.ts:184](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L184)

Dispatches editing operations.

#### Parameters

##### tr

[`Transaction`](../classes/Transaction.md)

[Transaction](../classes/Transaction.md)

#### Returns

`this`

***

### exec()

#### Call Signature

> **exec**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:190](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L190)

Executes a function with editor bound as context.

##### Type Parameters

###### A

`A` *extends* `unknown`[]

##### Parameters

###### fn

`EditorCommand`\<`A`, `T`\>

EditorCommand or EditorQuery

###### args

...`A`

arguments of the function

##### Returns

`this`

#### Call Signature

> **exec**\<`A`, `V`\>(`fn`, ...`args`): `V`

Defined in: [editor.ts:191](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L191)

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

Defined in: [editor.ts:196](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L196)

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

Defined in: [editor.ts:204](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L204)

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

## Properties

### doc

> `readonly` **doc**: `T`

Defined in: [editor.ts:173](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L173)

***

### selection

> **selection**: `Selection`

Defined in: [editor.ts:174](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L174)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:179](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L179)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:212](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L212)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
