[**API**](../API.md)

***

# Class: Transaction

Defined in: [doc/edit.ts:66](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L66)

## Accessors

### ops

#### Get Signature

> **get** **ops**(): readonly `Operation`[]

Defined in: [doc/edit.ts:73](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L73)

##### Returns

readonly `Operation`[]

## Constructors

### Constructor

> **new Transaction**(`ops?`): `Transaction`

Defined in: [doc/edit.ts:69](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L69)

#### Parameters

##### ops?

readonly `Operation`[]

#### Returns

`Transaction`

## Methods

### insertText()

> **insertText**(`start`, `text`): `this`

Defined in: [doc/edit.ts:77](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L77)

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

Defined in: [doc/edit.ts:86](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L86)

#### Parameters

##### start

`Position`

##### fragment

readonly `BlockNode`[]

#### Returns

`this`

***

### delete()

> **delete**(`start`, `end`): `this`

Defined in: [doc/edit.ts:95](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L95)

#### Parameters

##### start

`Position`

##### end

`Position`

#### Returns

`this`

***

### format()

> **format**(`start`, `end`, `key`, `value`): `this`

Defined in: [doc/edit.ts:104](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L104)

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

### attr()

> **attr**(`at`, `key`, `value`): `this`

Defined in: [doc/edit.ts:115](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L115)

#### Parameters

##### at

`Path`

##### key

`string`

##### value

`unknown`

#### Returns

`this`

***

### transform()

> **transform**(`position`): `Position`

Defined in: [doc/edit.ts:125](https://github.com/inokawa/edix/blob/56c6943d830f21af003fc5742a32c5b10e223f61/src/doc/edit.ts#L125)

#### Parameters

##### position

`Position`

#### Returns

`Position`
