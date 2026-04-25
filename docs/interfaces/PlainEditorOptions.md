[**API**](../API.md)

***

# Interface: PlainEditorOptions

Defined in: [presets/plain.ts:7](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/presets/plain.ts#L7)

## Extends

- `Omit`\<[`EditorOptions`](EditorOptions.md)\<`PlainDoc`\>, `"doc"` \| `"schema"` \| `"onChange"`\>

## Properties

### text

> **text**: `string`

Defined in: [presets/plain.ts:14](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/presets/plain.ts#L14)

Initial document text.

***

### singleline?

> `optional` **singleline**: `boolean`

Defined in: [presets/plain.ts:18](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/presets/plain.ts#L18)

TODO

***

### onChange()

> **onChange**: (`text`) => `void`

Defined in: [presets/plain.ts:22](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/presets/plain.ts#L22)

Callback invoked when document changes.

#### Parameters

##### text

`string`

#### Returns

`void`

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [editor.ts:115](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/editor.ts#L115)

The state editable or not.

#### Inherited from

`Omit.readonly`

***

### keyboard?

> `optional` **keyboard**: [`KeyboardHook`](../type-aliases/KeyboardHook.md)[]

Defined in: [editor.ts:121](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/editor.ts#L121)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

#### Inherited from

`Omit.keyboard`

***

### copy?

> `optional` **copy**: \[[`CopyHook`](../type-aliases/CopyHook.md), `...rest: CopyHook[]`\]

Defined in: [editor.ts:126](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/editor.ts#L126)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

#### Inherited from

`Omit.copy`

***

### paste?

> `optional` **paste**: \[[`PasteHook`](../type-aliases/PasteHook.md), `...rest: PasteHook[]`\]

Defined in: [editor.ts:131](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/editor.ts#L131)

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

Defined in: [editor.ts:135](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/editor.ts#L135)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

#### Inherited from

`Omit.isBlock`

***

### onError()?

> `optional` **onError**: (`message`) => `void`

Defined in: [editor.ts:145](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/editor.ts#L145)

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
