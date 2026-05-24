[**API**](../API.md)

***

# Class: Transaction

Defined in: [doc/edit.ts:67](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L67)

## Accessors

### ops

#### Get Signature

> **get** **ops**(): readonly `Operation`[]

Defined in: [doc/edit.ts:74](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L74)

##### Returns

readonly `Operation`[]

## Constructors

### Constructor

> **new Transaction**(`ops?`): `Transaction`

Defined in: [doc/edit.ts:70](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L70)

#### Parameters

##### ops?

readonly `Operation`[]

#### Returns

`Transaction`

## Methods

### insertText()

> **insertText**(`at`, `text`): `this`

Defined in: [doc/edit.ts:78](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L78)

#### Parameters

##### at

`number`

##### text

`string`

#### Returns

`this`

***

### insertFragment()

> **insertFragment**(`at`, `fragment`): `this`

Defined in: [doc/edit.ts:87](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L87)

#### Parameters

##### at

`number`

##### fragment

readonly `BlockNode`[]

#### Returns

`this`

***

### delete()

> **delete**(`start`, `end`): `this`

Defined in: [doc/edit.ts:96](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L96)

#### Parameters

##### start

`number`

##### end

`number`

#### Returns

`this`

***

### format()

> **format**(`start`, `end`, `key`, `value`): `this`

Defined in: [doc/edit.ts:105](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L105)

#### Parameters

##### start

`number`

##### end

`number`

##### key

`string`

##### value

`unknown`

#### Returns

`this`

***

### attr()

> **attr**(`at`, `key`, `value`): `this`

Defined in: [doc/edit.ts:116](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L116)

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

> **transform**(`position`): `number`

Defined in: [doc/edit.ts:126](https://github.com/inokawa/editate/blob/d46349a29ec95cd9d8330041874bdfb327a4ebb9/src/doc/edit.ts#L126)

#### Parameters

##### position

`number`

#### Returns

`number`
