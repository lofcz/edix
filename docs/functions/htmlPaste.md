[**API**](../API.md)

***

# Function: htmlPaste()

> **htmlPaste**\<`T`\>(`serializeText`, `serializers`): [`PasteHook`](../type-aliases/PasteHook.md)

Defined in: [hooks/paste/html.ts:9](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/hooks/paste/html.ts#L9)

An extension to handle pasting / dropping from HTML.

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### serializeText

(`t`) => `Extract`\<`InferNode`\<`T`\>, `TextNode`\>

### serializers

(`node`) => `void` \| `Exclude`\<`InferNode`\<`T`\>, `TextNode`\>[] = `[]`

## Returns

[`PasteHook`](../type-aliases/PasteHook.md)
