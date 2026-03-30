[**API**](../API.md)

***

# Interface: EditorPlugin

Defined in: [plugins/types.ts:3](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/plugins/types.ts#L3)

## Properties

### apply()?

> `optional` **apply**: (`op`, `next`) => `void`

Defined in: [plugins/types.ts:4](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/plugins/types.ts#L4)

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

Defined in: [plugins/types.ts:5](https://github.com/inokawa/edix/blob/ab46ad7639d47a1c04210a60f83b875ef90b7e64/src/plugins/types.ts#L5)

#### Parameters

##### element

`HTMLElement`

#### Returns

`void` \| () => `void`
