[**API**](../API.md)

***

# Interface: PlainEditorOptions

Defined in: [presets/plain.ts:21](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/presets/plain.ts#L21)

## Extends

- `Omit`\<[`EditorOptions`](EditorOptions.md)\<`PlainDoc`\>, `"doc"` \| `"schema"` \| `"onChange"`\>

## Properties

### text

> **text**: `string`

Defined in: [presets/plain.ts:28](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/presets/plain.ts#L28)

Initial document text.

***

### singleline?

> `optional` **singleline?**: `boolean`

Defined in: [presets/plain.ts:32](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/presets/plain.ts#L32)

TODO

***

### onChange

> **onChange**: (`text`, `dirtyRange`) => `void`

Defined in: [presets/plain.ts:36](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/presets/plain.ts#L36)

Callback invoked when document changes.

#### Parameters

##### text

`string`

##### dirtyRange

[`DirtyRange`](DirtyRange.md)

#### Returns

`void`

***

### readonly?

> `optional` **readonly?**: `boolean`

Defined in: [editor.ts:123](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/editor.ts#L123)

The state editable or not.

#### Inherited from

`Omit.readonly`

***

### isBlock?

> `optional` **isBlock?**: (`node`) => `boolean`

Defined in: [editor.ts:127](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/editor.ts#L127)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

#### Inherited from

`Omit.isBlock`

***

### autoScroll?

> `optional` **autoScroll?**: `boolean`

Defined in: [editor.ts:145](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/editor.ts#L145)

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

#### Inherited from

`Omit.autoScroll`

***

### revertForeignMutations?

> `optional` **revertForeignMutations?**: `boolean`

Defined in: [editor.ts:162](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/editor.ts#L162)

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

#### Inherited from

`Omit.revertForeignMutations`

***

### onWarn?

> `optional` **onWarn?**: (`message`) => `void`

Defined in: [editor.ts:168](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/editor.ts#L168)

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

#### Inherited from

`Omit.onWarn`

***

### onError?

> `optional` **onError?**: (`message`) => `never`

Defined in: [editor.ts:174](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/editor.ts#L174)

Callback invoked when errors happen.

#### Parameters

##### message

`string`

#### Returns

`never`

#### Default

`throw new Error(message)`

#### Inherited from

`Omit.onError`
