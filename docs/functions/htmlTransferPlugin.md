[**API**](../API.md)

***

# Function: htmlTransferPlugin()

> **htmlTransferPlugin**\<`T`\>(`editor`, `options`): `void`

Defined in: [plugins/transfer/htmlTransfer.ts:58](https://github.com/inokawa/editate/blob/b79665986a52dd60978d940ed7a1fd5d6a57fa28/src/plugins/transfer/htmlTransfer.ts#L58)

A plugin to handle copying / pasting HTML

## Type Parameters

### T

`T` *extends* `DocNode`

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)\<`T`\>

### options

#### serializeText

(`t`) => `Extract`\<`InferInlineNode`\<`T`\>, `TextNode`\>

#### serializers?

(`node`) => `void` \| `Exclude`\<`InferInlineNode`\<`T`\>, `TextNode`\>[]

## Returns

`void`
