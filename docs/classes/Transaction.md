[**API**](../API.md)

***

# Class: Transaction

Defined in: [doc/edit.ts:56](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L56)

## Accessors

### ops

#### Get Signature

> **get** **ops**(): readonly `Operation`[]

Defined in: [doc/edit.ts:64](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L64)

##### Returns

readonly `Operation`[]

## Constructors

### Constructor

> **new Transaction**(`ops?`): `Transaction`

Defined in: [doc/edit.ts:60](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L60)

#### Parameters

##### ops?

readonly `Operation`[]

#### Returns

`Transaction`

## Methods

### insertText()

> **insertText**(`start`, `text`): `this`

Defined in: [doc/edit.ts:68](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L68)

#### Parameters

##### start

`Position`

##### text

`string`

#### Returns

`this`

***

### insertFragment()

> **insertFragment**(`start`, `fragment`): `this`

Defined in: [doc/edit.ts:77](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L77)

#### Parameters

##### start

`Position`

##### fragment

readonly readonly `InlineNode`[][]

#### Returns

`this`

***

### delete()

> **delete**(`start`, `end`): `this`

Defined in: [doc/edit.ts:86](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L86)

#### Parameters

##### start

`Position`

##### end

`Position`

#### Returns

`this`

***

### attr()

> **attr**(`start`, `end`, `key`, `value`): `this`

Defined in: [doc/edit.ts:95](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L95)

#### Parameters

##### start

`Position`

##### end

`Position`

##### key

`string`

##### value

`unknown`

#### Returns

`this`

***

### transform()

> **transform**(`position`): `Position`

Defined in: [doc/edit.ts:106](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L106)

#### Parameters

##### position

`Position`

#### Returns

`Position`

## Properties

### selection?

> `optional` **selection**: `SelectionSnapshot`

Defined in: [doc/edit.ts:58](https://github.com/inokawa/edix/blob/d7945ff974b9e3a7fc749dac0c94c243a7683db0/src/doc/edit.ts#L58)
