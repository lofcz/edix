[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:100](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L100)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema**: `S`

Defined in: [editor.ts:107](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L107)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:111](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L111)

Initial document.

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [editor.ts:115](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L115)

The state editable or not.

***

### keyboard?

> `optional` **keyboard**: [`KeyboardHook`](../type-aliases/KeyboardHook.md)[]

Defined in: [editor.ts:121](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L121)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

***

### copy?

> `optional` **copy**: \[[`CopyHook`](../type-aliases/CopyHook.md), `...rest: CopyHook[]`\]

Defined in: [editor.ts:126](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L126)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

***

### paste?

> `optional` **paste**: \[[`PasteHook`](../type-aliases/PasteHook.md), `...rest: PasteHook[]`\]

Defined in: [editor.ts:131](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L131)

Functions to handle paste / drop events

#### Default

```ts
[plainPaste()]
```

***

### isBlock()?

> `optional` **isBlock**: (`node`) => `boolean`

Defined in: [editor.ts:135](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L135)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

***

### onChange()

> **onChange**: (`doc`) => `void`

Defined in: [editor.ts:139](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L139)

Callback invoked when document changes.

#### Parameters

##### doc

`T`

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`message`) => `void`

Defined in: [editor.ts:145](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/editor.ts#L145)

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
