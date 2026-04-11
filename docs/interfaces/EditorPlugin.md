[**API**](../API.md)

***

# Interface: EditorPlugin

Defined in: [plugins/types.ts:3](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/plugins/types.ts#L3)

## Properties

### apply()?

> `optional` **apply**: (`op`, `next`) => `void`

Defined in: [plugins/types.ts:4](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/plugins/types.ts#L4)

#### Parameters

##### op

`Operation`

##### next

(`op?`) => `void`

#### Returns

`void`

***

### mount()?

> `optional` **mount**: (`element`) => `void` \| () => `void`

Defined in: [plugins/types.ts:5](https://github.com/lofcz/edix/blob/c3e2464dd9fb3308ead13fab4a3705fded785408/src/plugins/types.ts#L5)

#### Parameters

##### element

`HTMLElement`

#### Returns

`void` \| () => `void`
