[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:108](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L108)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema?**: `S`

Defined in: [editor.ts:115](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L115)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:119](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L119)

Initial document.

***

### readonly?

> `optional` **readonly?**: `boolean`

Defined in: [editor.ts:123](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L123)

The state editable or not.

***

### isBlock?

> `optional` **isBlock?**: (`node`) => `boolean`

Defined in: [editor.ts:127](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L127)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

***

### autoScroll?

> `optional` **autoScroll?**: `boolean`

Defined in: [editor.ts:145](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L145)

Keep the caret visible inside the mounted element after document
changes, behaving like a native `<textarea>`:

- If the caret is already visible (e.g. typing in the middle of a
  long doc), nothing scrolls.
- If the caret falls below the viewport, the element scrolls down
  just enough to reveal it.
- If the caret falls above the viewport, the element scrolls up
  just enough to reveal it.

Scroll work is coalesced via `requestAnimationFrame` and only reads
the caret's bounding rect, never `scrollHeight`, so it does not
force a full overflow-layout pass on each input.

#### Default

```ts
false
```

***

### onWarn?

> `optional` **onWarn?**: (`message`) => `void`

Defined in: [editor.ts:151](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L151)

Callback invoked when errors happen.

#### Parameters

##### message

`string`

#### Returns

`void`

#### Default

```ts
console.warn
```

***

### onError?

> `optional` **onError?**: (`message`) => `never`

Defined in: [editor.ts:157](https://github.com/lofcz/edix/blob/95ab40cc3eb5ef63e0ae1a5780452a54a56f1a37/src/editor.ts#L157)

Callback invoked when errors happen.

#### Parameters

##### message

`string`

#### Returns

`never`

#### Default

`throw new Error(message)`
