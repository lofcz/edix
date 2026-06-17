[**API**](../API.md)

***

# Interface: Editor\<T\>

Defined in: [editor.ts:196](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L196)

The editor instance.

## Type Parameters

### T

`T` *extends* `DocNode` = `DocNode`

## Methods

### apply()

> **apply**(`op`): `this`

Defined in: [editor.ts:220](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L220)

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

Defined in: [editor.ts:226](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L226)

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

Defined in: [editor.ts:227](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L227)

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

Defined in: [editor.ts:232](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L232)

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

Defined in: [editor.ts:240](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L240)

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

Defined in: [editor.ts:247](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L247)

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

Defined in: [editor.ts:251](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L251)

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

Defined in: [editor.ts:197](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L197)

***

### isEmpty

> `readonly` **isEmpty**: `boolean`

Defined in: [editor.ts:202](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L202)

Whether the document is empty (no text content, no void nodes).
Recomputed once per commit so reads stay O(1).

***

### selection

> **selection**: `Selection`

Defined in: [editor.ts:203](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L203)

***

### readonly

> **readonly**: `boolean`

Defined in: [editor.ts:208](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L208)

The getter/setter for the editor's read-only state.
`true` to read-only. `false` to editable.

***

### autoScroll

> **autoScroll**: `boolean`

Defined in: [editor.ts:215](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L215)

Enable/disable native-textarea-like auto-scroll: scroll the mounted
element only when needed to keep the caret visible.

#### See

[EditorOptions.autoScroll](EditorOptions.md#autoscroll)

***

### input

> **input**: (`element`) => () => `void`

Defined in: [editor.ts:256](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L256)

A function to make DOM editable.

#### Parameters

##### element

`HTMLElement`

#### Returns

A function to stop subscribing DOM changes and restores previous DOM state.

() => `void`
