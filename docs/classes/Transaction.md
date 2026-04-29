[**API**](../API.md)

***

# Class: Transaction

Defined in: [doc/edit.ts:69](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L69)

## Accessors

### ops

#### Get Signature

> **get** **ops**(): readonly `Operation`[]

Defined in: [doc/edit.ts:76](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L76)

##### Returns

readonly `Operation`[]

## Constructors

### Constructor

> **new Transaction**(`ops?`): `Transaction`

Defined in: [doc/edit.ts:72](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L72)

#### Parameters

##### ops?

readonly `Operation`[]

#### Returns

`Transaction`

## Methods

### insertText()

> **insertText**(`start`, `text`): `this`

Defined in: [doc/edit.ts:80](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L80)

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

Defined in: [doc/edit.ts:89](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L89)

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

Defined in: [doc/edit.ts:98](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L98)

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

Defined in: [doc/edit.ts:107](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L107)

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

Defined in: [doc/edit.ts:118](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L118)

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

Defined in: [doc/edit.ts:128](https://github.com/inokawa/edix/blob/b06573dd54507ba85c0ad274b18c999023c6a52b/src/doc/edit.ts#L128)

#### Parameters

##### position

`Position`

#### Returns

`Position`
