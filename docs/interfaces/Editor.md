[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:204](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L204)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

> **apply**(`op`): `this`

Defined in: [editor.ts:228](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L228)

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

Defined in: [editor.ts:234](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L234)

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

Defined in: [editor.ts:238](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L238)

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

Defined in: [editor.ts:243](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L243)

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

Defined in: [editor.ts:251](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L251)

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

Defined in: [editor.ts:258](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L258)

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

Defined in: [editor.ts:262](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L262)

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

Defined in: [editor.ts:205](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L205)

***

### isEmpty

> `readonly` **isEmpty**: `boolean`

Defined in: [editor.ts:210](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L210)

Whether the document is empty (no text content, no void nodes).
Recomputed once per commit so reads stay O(1).

***

### selection

> **selection**: `Selection`

Defined in: [editor.ts:211](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L211)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:216](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L216)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### autoScroll

> **autoScroll**: `boolean`

Defined in: [editor.ts:223](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L223)

Enable/disable native-textarea-like auto-scroll: scroll the mounted
element only when needed to keep the caret visible.

#### See

[EditorOptions.autoScroll](EditorOptions.md#autoscroll)

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:267](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/editor.ts#L267)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
