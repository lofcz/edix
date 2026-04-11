[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:98](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L98)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema**: `S`

Defined in: [editor.ts:105](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L105)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:109](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L109)

Initial document.

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [editor.ts:113](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L113)

The state editable or not.

***

### plugins?

> `optional` **plugins**: [`EditorPlugin`](EditorPlugin.md)[]

Defined in: [editor.ts:117](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L117)

TODO

***

### keyboard?

> `optional` **keyboard**: [`KeyboardHandler`](../type-aliases/KeyboardHandler.md)[]

Defined in: [editor.ts:123](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L123)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

***

### copy?

> `optional` **copy**: \[[`CopyExtension`](../type-aliases/CopyExtension.md), `...rest: CopyExtension[]`\]

Defined in: [editor.ts:128](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L128)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

***

### paste?

> `optional` **paste**: \[[`PasteExtension`](../type-aliases/PasteExtension.md), `...rest: PasteExtension[]`\]

Defined in: [editor.ts:133](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L133)

Functions to handle paste / drop events

#### Default

```ts
[plainPaste()]
```

***

### isBlock()?

> `optional` **isBlock**: (`node`) => `boolean`

Defined in: [editor.ts:137](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L137)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

***

### autoScroll?

> `optional` **autoScroll**: `boolean`

Defined in: [editor.ts:143](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L143)

Automatically scroll the mounted element to keep the caret visible
after document changes. Scroll is coalesced via rAF for zero
synchronous layout cost during input handling.

***

### onChange()

> **onChange**: (`doc`) => `void`

Defined in: [editor.ts:147](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L147)

Callback invoked when document changes.

#### Parameters

##### doc

`T`

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`message`) => `void`

Defined in: [editor.ts:153](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L153)

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
