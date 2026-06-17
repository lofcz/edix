[**API**](../API.md)

***

# Interface: EditorOptions\<T, S\>

Defined in: [editor.ts:106](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L106)

Options of [createEditor](../functions/createEditor.md).

## Type Parameters

### T

`T` *extends* `DocNode`

### S

`S` *extends* `StandardSchemaV1`\<`T`, `T`\> \| `void` = `void`

## Properties

### schema?

> `optional` **schema?**: `S`

Defined in: [editor.ts:113](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L113)

Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.

***

### doc

> **doc**: `T`

Defined in: [editor.ts:117](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L117)

Initial document.

***

### readonly?

> `optional` **readonly?**: `boolean`

Defined in: [editor.ts:121](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/editor.ts#L121)

The state editable or not.

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
