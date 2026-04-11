[**API**](../API.md)

***

# Interface: PlainEditorOptions

Defined in: [presets/plain.ts:22](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L22)

## Extends

- `Omit`\<[`EditorOptions`](EditorOptions.md)\<`PlainDoc`\>, `"doc"` \| `"schema"` \| `"onChange"`\>

## Properties

### text

> **text**: `string`

Defined in: [presets/plain.ts:29](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L29)

Initial document text.

***

### singleline?

> `optional` **singleline**: `boolean`

Defined in: [presets/plain.ts:33](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L33)

TODO

***

### onChange()

> **onChange**: (`text`, `dirtyRange`) => `void`

Defined in: [presets/plain.ts:37](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/presets/plain.ts#L37)

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

> `optional` **readonly**: `boolean`

Defined in: [editor.ts:113](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L113)

The state editable or not.

#### Inherited from

`Omit.readonly`

***

### plugins?

> `optional` **plugins**: [`EditorPlugin`](EditorPlugin.md)[]

Defined in: [editor.ts:117](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L117)

TODO

#### Inherited from

`Omit.plugins`

***

### keyboard?

> `optional` **keyboard**: [`KeyboardHandler`](../type-aliases/KeyboardHandler.md)[]

Defined in: [editor.ts:123](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L123)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

#### Inherited from

`Omit.keyboard`

***

### copy?

> `optional` **copy**: \[[`CopyExtension`](../type-aliases/CopyExtension.md), `...rest: CopyExtension[]`\]

Defined in: [editor.ts:128](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L128)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

#### Inherited from

`Omit.copy`

***

### paste?

> `optional` **paste**: \[[`PasteExtension`](../type-aliases/PasteExtension.md), `...rest: PasteExtension[]`\]

Defined in: [editor.ts:133](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L133)

Functions to handle paste / drop events

#### Default

```ts
[plainPaste()]
```

#### Inherited from

`Omit.paste`

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

#### Inherited from

`Omit.isBlock`

***

### autoScroll?

> `optional` **autoScroll**: `boolean`

Defined in: [editor.ts:143](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/editor.ts#L143)

Automatically scroll the mounted element to keep the caret visible
after document changes. Scroll is coalesced via rAF for zero
synchronous layout cost during input handling.

#### Inherited from

`Omit.autoScroll`

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

#### Inherited from

`Omit.onError`
