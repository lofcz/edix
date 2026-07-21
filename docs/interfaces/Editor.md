[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:198](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L198)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

> **apply**(`op`): `this`

Defined in: [editor.ts:222](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L222)

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

Defined in: [editor.ts:228](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L228)

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

Defined in: [editor.ts:232](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L232)

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

Defined in: [editor.ts:237](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L237)

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

Defined in: [editor.ts:245](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L245)

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

Defined in: [editor.ts:252](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L252)

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

Defined in: [editor.ts:256](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L256)

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

Defined in: [editor.ts:199](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L199)

***

### isEmpty

> `readonly` **isEmpty**: `boolean`

Defined in: [editor.ts:204](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L204)

Whether the document is empty (no text content, no void nodes).
Recomputed once per commit so reads stay O(1).

***

### selection

> **selection**: `Selection`

Defined in: [editor.ts:205](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L205)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:210](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L210)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### autoScroll

> **autoScroll**: `boolean`

Defined in: [editor.ts:217](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L217)

Enable/disable native-textarea-like auto-scroll: scroll the mounted
element only when needed to keep the caret visible.

#### See

[EditorOptions.autoScroll](EditorOptions.md#autoscroll)

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:261](https://github.com/lofcz/edix/blob/0e357c953ddd75875cd59f2e802f280583301d1c/src/editor.ts#L261)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
