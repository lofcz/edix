[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:227](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L227)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

> **apply**(`op`): `this`

Defined in: [editor.ts:251](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L251)

Applies editing operations as a transaction, which is discarded if one of them is cancelled or throws, or the result is rejected by the schema.

#### Parameters

##### op

[`Operation`](../type-aliases/Operation.md) \| readonly [`Operation`](../type-aliases/Operation.md)[]

[Operation](../type-aliases/Operation.md)

#### Returns

`this`

***

### exec()

#### Call Signature

> **exec**\<`A`\>(`fn`, ...`args`): `this`

Defined in: [editor.ts:257](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L257)

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

Defined in: [editor.ts:261](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L261)

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

Defined in: [editor.ts:266](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L266)

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

Defined in: [editor.ts:274](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L274)

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

Defined in: [editor.ts:281](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L281)

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

Defined in: [editor.ts:285](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L285)

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

***

### domUpdate()

> **domUpdate**(`fn`): `this`

Defined in: [editor.ts:298](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L298)

Run a host-driven DOM paint. Mutations inside are accepted by the
MutationObserver.

Required when [EditorOptions.revertForeignMutations](EditorOptions.md#revertforeignmutations) is `true`.
Safe to call when unmounted (runs `fn` only) or when the option is off.

#### Parameters

##### fn

() => `void`

#### Returns

`this`

## Properties

### doc

> `readonly` **doc**: `T`

Defined in: [editor.ts:228](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L228)

***

### isEmpty

> `readonly` **isEmpty**: `boolean`

Defined in: [editor.ts:233](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L233)

Whether the document is empty (no text content, no void nodes).
Recomputed once per commit so reads stay O(1).

***

### selection

> **selection**: `Selection`

Defined in: [editor.ts:234](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L234)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:239](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L239)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### autoScroll

> **autoScroll**: `boolean`

Defined in: [editor.ts:246](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L246)

Enable/disable native-textarea-like auto-scroll: scroll the mounted
element only when needed to keep the caret visible.

#### See

[EditorOptions.autoScroll](EditorOptions.md#autoscroll)

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:290](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L290)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
