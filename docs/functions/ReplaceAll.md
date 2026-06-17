[**API**](../API.md)

***

# Function: ReplaceAll()

> **ReplaceAll**(`editor`, `text`): `void`

Defined in: [commands.ts:109](https://github.com/lofcz/edix/blob/d9da6da70816800733ae5769854e6cd585f2cdcf/src/commands.ts#L109)

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
