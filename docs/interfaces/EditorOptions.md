[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:109](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L109)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema?**: `S`

Defined in: [editor.ts:116](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L116)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:120](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L120)

Initial document.

***

### readonly?

> `optional` **readonly?**: `boolean`

Defined in: [editor.ts:124](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L124)

The state editable or not.

***

### isBlock?

> `optional` **isBlock?**: (`node`) => `boolean`

Defined in: [editor.ts:128](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L128)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

***

### autoScroll?

> `optional` **autoScroll?**: `boolean`

Defined in: [editor.ts:146](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L146)

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

### revertForeignMutations?

> `optional` **revertForeignMutations?**: `boolean`

Defined in: [editor.ts:163](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L163)

Revert DOM mutations that are not from IME composition and not inside
[Editor.domUpdate](Editor.md#domupdate).

Use with **imperative** view sync (host patches the contenteditable from
`change`). Declarative React/Vue hosts that re-render from state should
leave this `false` — their paint looks like a foreign mutation and would
be undone.

When enabled, wrap every host-driven DOM write in [Editor.domUpdate](Editor.md#domupdate)
so the paint is accepted. This defends against page translators,
Grammarly-like extensions, and similar tools that rewrite the editable
tree and desync it from the document model.

#### Default

```ts
false
```

***

### onWarn?

> `optional` **onWarn?**: (`message`) => `void`

Defined in: [editor.ts:169](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L169)

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

Defined in: [editor.ts:175](https://github.com/lofcz/edix/blob/17a55a1433563bc0e7b6874892023dd16960c761/src/editor.ts#L175)

Callback invoked when errors happen.

#### Parameters

##### message

`string`

#### Returns

`never`

#### Default

`throw new Error(message)`
