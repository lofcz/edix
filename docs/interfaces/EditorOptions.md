[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:109](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L109)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema?**: `S`

Defined in: [editor.ts:116](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L116)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:120](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L120)

Initial document.

***

### readonly?

> `optional` **readonly?**: `boolean`

Defined in: [editor.ts:124](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L124)

The state editable or not.

***

### keyboard?

> `optional` **keyboard?**: [`KeyboardHook`](../type-aliases/KeyboardHook.md)[]

Defined in: [editor.ts:130](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L130)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

***

### copy?

> `optional` **copy?**: \[[`CopyHook`](../type-aliases/CopyHook.md), `...rest: CopyHook[]`\]

Defined in: [editor.ts:135](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L135)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

***

### paste?

> `optional` **paste?**: \[[`PasteHook`](../type-aliases/PasteHook.md), `...rest: PasteHook[]`\]

Defined in: [editor.ts:140](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L140)

Functions to handle paste / drop events

#### Default

```ts
[plainPaste()]
```

***

### isBlock?

> `optional` **isBlock?**: (`node`) => `boolean`

Defined in: [editor.ts:144](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L144)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

***

### onChange

> **onChange**: (`doc`) => `void`

Defined in: [editor.ts:148](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L148)

Callback invoked when document changes.

#### Parameters

##### doc

`T`

#### Returns

`void`

***

### onError?

> `optional` **onError?**: (`message`) => `void`

Defined in: [editor.ts:154](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L154)

Callback invoked when errors happen.

#### Parameters

##### message

`string`

#### Returns

`void`

#### Default

```ts
console.error
```
