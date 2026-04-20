[**API**](../API.md)

***

# Class: Transaction

Defined in: [doc/edit.ts:57](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L57)

## Accessors

### ops

#### Get Signature

> **get** **ops**(): readonly `Operation`[]

Defined in: [doc/edit.ts:65](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L65)

##### Returns

readonly `Operation`[]

## Constructors

### Constructor

> **new Transaction**(`ops?`): `Transaction`

Defined in: [doc/edit.ts:61](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L61)

#### Parameters

##### ops?

readonly `Operation`[]

#### Returns

`Transaction`

## Methods

### insertText()

> **insertText**(`start`, `text`): `this`

Defined in: [doc/edit.ts:69](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L69)

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

Defined in: [doc/edit.ts:78](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L78)

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

Defined in: [doc/edit.ts:87](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L87)

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

Defined in: [doc/edit.ts:96](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L96)

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

Defined in: [doc/edit.ts:107](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L107)

#### Parameters

##### position

`Position`

#### Returns

`Position`

## Properties

### selection?

> `optional` **selection**: `SelectionSnapshot`

Defined in: [doc/edit.ts:59](https://github.com/inokawa/edix/blob/7b3b21d6457b7fba74e37232c1b46825210d4e94/src/doc/edit.ts#L59)
