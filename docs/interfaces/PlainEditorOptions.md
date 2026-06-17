[**API**](../API.md)

***

# Interface: PlainEditorOptions

Defined in: [presets/plain.ts:21](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/presets/plain.ts#L21)

## Extends

- `Omit`\<[`EditorOptions`](EditorOptions.md)\<`PlainDoc`\>, `"doc"` \| `"schema"` \| `"onChange"`\>

## Properties

### text

> **text**: `string`

Defined in: [presets/plain.ts:28](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/presets/plain.ts#L28)

Initial document text.

***

### singleline?

> `optional` **singleline?**: `boolean`

Defined in: [presets/plain.ts:32](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/presets/plain.ts#L32)

TODO

***

### onChange

> **onChange**: (`text`, `dirtyRange`) => `void`

Defined in: [presets/plain.ts:36](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/presets/plain.ts#L36)

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

Defined in: [editor.ts:121](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L121)

The state editable or not.

#### Inherited from

`Omit.readonly`

***

### isBlock?

> `optional` **isBlock?**: (`node`) => `boolean`

Defined in: [editor.ts:125](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L125)

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

Defined in: [editor.ts:143](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L143)

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

### onWarn?

> `optional` **onWarn?**: (`message`) => `void`

Defined in: [editor.ts:149](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L149)

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

Defined in: [editor.ts:155](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L155)

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
