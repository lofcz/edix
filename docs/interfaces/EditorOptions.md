[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:97](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L97)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema**: `S`

Defined in: [editor.ts:104](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L104)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:108](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L108)

Initial document.

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [editor.ts:112](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L112)

The state editable or not.

***

### plugins?

> `optional` **plugins**: [`EditorPlugin`](EditorPlugin.md)[]

Defined in: [editor.ts:116](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L116)

TODO

***

### keyboard?

> `optional` **keyboard**: [`KeyboardHandler`](../type-aliases/KeyboardHandler.md)[]

Defined in: [editor.ts:122](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L122)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

***

### copy?

> `optional` **copy**: \[[`CopyExtension`](../type-aliases/CopyExtension.md), `...rest: CopyExtension[]`\]

Defined in: [editor.ts:127](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L127)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

***

### paste?

> `optional` **paste**: \[[`PasteExtension`](../type-aliases/PasteExtension.md), `...rest: PasteExtension[]`\]

Defined in: [editor.ts:132](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L132)

Functions to handle paste / drop events

#### Default

```ts
[plainPaste()]
```

***

### isBlock()?

> `optional` **isBlock**: (`node`) => `boolean`

Defined in: [editor.ts:136](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L136)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

***

### onChange()

> **onChange**: (`doc`) => `void`

Defined in: [editor.ts:140](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L140)

Callback invoked when document changes.

#### Parameters

##### doc

`T`

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`message`) => `void`

Defined in: [editor.ts:146](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/editor.ts#L146)

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
