[**API**](../API.md)

***

# Function: htmlPaste()

> **htmlPaste**\<`T`\>(`serializeText`, `serializers?`): [`PasteHook`](../type-aliases/PasteHook.md)

Defined in: [hooks/paste/html.ts:9](https://github.com/inokawa/edix/blob/03e089ec444bb6424c9c4249ab777528fe0d4bde/src/hooks/paste/html.ts#L9)

An extension to handle pasting / dropping from HTML.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### serializeText

(`t`) => `Extract`\<`InferInlineNode`\<`T`\>, `TextNode`\>

### serializers?

(`node`) => `void` \| `Exclude`\<`InferInlineNode`\<`T`\>, `TextNode`\>[] = `[]`

## Returns

[`PasteHook`](../type-aliases/PasteHook.md)
