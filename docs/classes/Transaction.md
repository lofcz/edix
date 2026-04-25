[**API**](../API.md)

***

# Class: Transaction

Defined in: [doc/edit.ts:68](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L68)

## Accessors

### ops

#### Get Signature

> **get** **ops**(): readonly `Operation`[]

Defined in: [doc/edit.ts:75](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L75)

##### Returns

readonly `Operation`[]

## Constructors

### Constructor

> **new Transaction**(`ops?`): `Transaction`

Defined in: [doc/edit.ts:71](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L71)

#### Parameters

##### ops?

readonly `Operation`[]

#### Returns

`Transaction`

## Methods

### insertText()

> **insertText**(`start`, `text`): `this`

Defined in: [doc/edit.ts:79](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L79)

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

Defined in: [doc/edit.ts:88](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L88)

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

Defined in: [doc/edit.ts:97](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L97)

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

Defined in: [doc/edit.ts:106](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L106)

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

Defined in: [doc/edit.ts:117](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L117)

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

Defined in: [doc/edit.ts:127](https://github.com/inokawa/edix/blob/365226366641d169bae878eed0ca595744a805b7/src/doc/edit.ts#L127)

#### Parameters

##### position

`Position`

#### Returns

`Position`
