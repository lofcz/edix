[**API**](../API.md)

***

# Interface: PlainEditorOptions

Defined in: [presets/plain.ts:7](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/presets/plain.ts#L7)

## Extends

- `Omit`\<[`EditorOptions`](EditorOptions.md)\<`PlainDoc`\>, `"doc"` \| `"schema"` \| `"onChange"`\>

## Properties

### text

> **text**: `string`

Defined in: [presets/plain.ts:14](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/presets/plain.ts#L14)

Initial document text.

***

### singleline?

> `optional` **singleline?**: `boolean`

Defined in: [presets/plain.ts:18](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/presets/plain.ts#L18)

TODO

***

### onChange

> **onChange**: (`text`) => `void`

Defined in: [presets/plain.ts:22](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/presets/plain.ts#L22)

Callback invoked when document changes.

#### Parameters

##### text

`string`

#### Returns

`void`

***

### keyboard?

> `optional` **keyboard?**: [`KeyboardHook`](../type-aliases/KeyboardHook.md)[]

Defined in: [editor.ts:130](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L130)

Functions to handle keyboard events.

Return `true` if you want to stop propagation.

#### Inherited from

`Omit.keyboard`

***

### readonly?

> `optional` **readonly?**: `boolean`

Defined in: [editor.ts:124](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L124)

The state editable or not.

#### Inherited from

`Omit.readonly`

***

### copy?

> `optional` **copy?**: \[[`CopyHook`](../type-aliases/CopyHook.md), `...rest: CopyHook[]`\]

Defined in: [editor.ts:135](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L135)

Functions to handle copy events

#### Default

```ts
[plainCopy()]
```

#### Inherited from

`Omit.copy`

***

### paste?

> `optional` **paste?**: \[[`PasteHook`](../type-aliases/PasteHook.md), `...rest: PasteHook[]`\]

Defined in: [editor.ts:140](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L140)

Functions to handle paste / drop events

#### Default

```ts
[plainPaste()]
```

#### Inherited from

`Omit.paste`

***

### isBlock?

> `optional` **isBlock?**: (`node`) => `boolean`

Defined in: [editor.ts:144](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L144)

TODO

#### Parameters

##### node

`HTMLElement`

#### Returns

`boolean`

#### Inherited from

`Omit.isBlock`

***

### onError?

> `optional` **onError?**: (`message`) => `void`

Defined in: [editor.ts:154](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/editor.ts#L154)

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
