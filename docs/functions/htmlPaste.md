[**API**](../API.md)

***

# Function: htmlPaste()

> **htmlPaste**\<`T`\>(`serializeText`, `serializers`): [`PasteHook`](../type-aliases/PasteHook.md)

Defined in: [hooks/paste/html.ts:9](https://github.com/inokawa/edix/blob/8e6d90067f2f7175e9c6e67138fe753f07f08c94/src/hooks/paste/html.ts#L9)

An extension to handle pasting / dropping from HTML.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### serializeText

(`t`) => `Extract`\<`InferInlineNode`\<`T`\>, `TextNode`\>

### serializers

(`node`) => `void` \| `Exclude`\<`InferInlineNode`\<`T`\>, `TextNode`\>[] = `[]`

## Returns

[`PasteHook`](../type-aliases/PasteHook.md)
