[**API**](../API.md)

***

# Function: ReplaceAll()

> **ReplaceAll**(`editor`, `text`): `void`

Defined in: [commands.ts:112](https://github.com/lofcz/edix/blob/36e8457c3653b1968d147b3c83c412bc54a2ee9d/src/commands.ts#L112)

Replace the whole document content with a plain text string.

Fork-only convenience command — splits on `\n` into one block per line
(matching how plain editors render). Equivalent to:

```ts
editor.exec(ReplaceDoc, text.split("\n").map((t) => ({ children: [{ text: t }] })));
```

## Parameters

### editor

[`Editor`](../interfaces/Editor.md)

### text

`string`

## Returns

`void`
