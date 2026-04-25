[**API**](../API.md)

***

# Function: htmlPaste()

> **htmlPaste**\<`T`\>(`serializeText`, `serializers`): [`PasteHook`](../type-aliases/PasteHook.md)

Defined in: [hooks/paste/html.ts:9](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/hooks/paste/html.ts#L9)

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
