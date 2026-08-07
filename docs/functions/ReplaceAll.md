[**API**](../API.md)

***

# Function: ReplaceAll()

> **ReplaceAll**(`editor`, `text`): `void`

Defined in: [commands.ts:112](https://github.com/lofcz/edix/blob/c107bd4d7da7f42a515b729a576c9e41550b876d/src/commands.ts#L112)

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
