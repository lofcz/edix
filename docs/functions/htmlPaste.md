[**API**](../API.md)

***

# Function: htmlPaste()

> **htmlPaste**\<`T`\>(`serializeText`, `serializers`): [`PasteExtension`](../type-aliases/PasteExtension.md)

Defined in: [extensions/paste/html.ts:9](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/extensions/paste/html.ts#L9)

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

[`PasteExtension`](../type-aliases/PasteExtension.md)
