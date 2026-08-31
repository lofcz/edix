import { toRange } from "./doc/position.js";
import {
  getLeafBlockAt,
  getLeafAt,
  getNodeSize,
  isTextNode,
} from "./doc/node.js";
import type { Editor } from "./editor.js";
import type { DocNode, Range } from "./doc/types.js";
import type {
  ExtractAttrValue,
  InferInlineNode,
  InferLeafBlockNode,
  InferTextNode,
  InferVoidNode,
} from "./doc/types-infer.js";
import { LeavesInRange } from "./queries.js";

/**
 * Delete content in the selection or specified range.
 */
export function Delete(
  editor: Editor,
  range: Range = toRange(editor.selection),
) {
  editor.apply({ type: "delete", range });
}

/**
 * Insert text at the caret or specified position.
 */
export function InsertText(
  editor: Editor,
  text: string,
  at: number = editor.selection[0],
) {
  editor.apply({ type: "insert_text", at, text });
}

/**
 * Insert node at the caret or specified position.
 */
export function InsertNode<T extends DocNode>(
  editor: Editor<T>,
  node: InferVoidNode<T>,
  at: number = editor.selection[0],
) {
  editor.apply({
    type: "insert_node",
    at,
    fragment: [{ children: [node] }],
  });
}

/**
 * Insert multiple inline nodes as a single line fragment in one transaction.
 *
 * Fork-only command. Useful when a single insert needs to interleave text and
 * void nodes (e.g. mention chips) without splitting blocks.
 */
export function InsertNodes<T extends DocNode>(
  editor: Editor<T>,
  nodes: InferInlineNode<T>[],
  position: number = editor.selection[0],
) {
  editor.apply({
    type: "insert_node",
    at: position,
    fragment: [{ children: nodes }],
  });
}

/**
 * Replace text in the selection or specified range.
 */
export function ReplaceText(
  editor: Editor,
  text: string,
  range: Range = toRange(editor.selection),
) {
  editor
    .apply({ type: "delete", range })
    .apply({ type: "insert_text", at: range[0], text });
}

/**
 * Replace document in the editor.
 *
 * Selection is clamped to the new document size (see `applyOperation` for
 * `patch_node`). Safe to shrink the doc — e.g. `- ` (2) → empty list item (0).
 */
export function ReplaceDoc<T extends DocNode>(
  editor: Editor<T>,
  fragment: T["children"],
) {
  editor.apply({
    type: "patch_node",
    path: [],
    key: "children",
    value: fragment,
  });
}

/**
 * Replace the whole document content with a plain text string.
 *
 * Fork-only convenience command — splits on `\n` into one block per line
 * (matching how plain editors render). Equivalent to:
 *
 * ```ts
 * editor.exec(ReplaceDoc, text.split("\n").map((t) => ({ children: [{ text: t }] })));
 * ```
 */
export function ReplaceAll(editor: Editor, text: string) {
  editor
    .apply({ type: "delete", range: [0, getNodeSize(editor.doc)] })
    .apply({ type: "insert_text", at: 0, text });
}

type ToggleableKey<T> = {
  [K in keyof T]-?: T[K] extends boolean | undefined ? K : never;
}[keyof T];

/**
 * Format content in the selection or specified range.
 */
export function Format<
  T extends DocNode,
  N extends Omit<InferTextNode<T>, "text">,
  K extends Extract<keyof N, string>,
>(
  editor: Editor<T>,
  key: K,
  value: N[K],
  range: Range = toRange(editor.selection),
) {
  editor.apply({ type: "format", range, key, value });
}

/**
 * Toggle formatting in the selection or specified range.
 */
export function ToggleFormat<T extends DocNode>(
  editor: Editor<T>,
  key: Extract<ToggleableKey<Omit<InferTextNode<T>, "text">>, string>,
  range: Range = toRange(editor.selection),
) {
  let shouldFormat = false;
  let hasText = false;
  for (const n of editor.exec(LeavesInRange, range)) {
    if (isTextNode(n)) {
      hasText = true;
      if (!n[key as keyof typeof n]) {
        shouldFormat = true;
        break;
      }
    }
  }

  if (!hasText) {
    return;
  }

  editor.apply({
    type: "format",
    range,
    key,
    value: shouldFormat,
  });
}

/**
 * Set attr to a block node at the caret or specified position.
 */
export function SetBlockAttr<
  T extends DocNode,
  N extends InferLeafBlockNode<T>,
  K extends string,
>(
  editor: Editor<T>,
  key: K,
  value: ExtractAttrValue<N, K>,
  offset: number = editor.selection[0],
) {
  const path = getLeafBlockAt(editor.doc, offset)[2];
  editor.apply({ type: "patch_node", path, key, value });
}

/**
 * Toggle attr of block node at the caret or specified position.
 */
export function ToggleBlockAttr<
  T extends DocNode,
  N extends InferLeafBlockNode<T>,
  K extends string,
>(
  editor: Editor<T>,
  key: K,
  onValue: ExtractAttrValue<N, K>,
  offValue: ExtractAttrValue<N, K>,
  offset: number = editor.selection[0],
) {
  const [block, , path] = getLeafBlockAt(editor.doc, offset);
  editor.apply({
    type: "patch_node",
    path,
    key,
    value: block[key as keyof typeof block] === onValue ? offValue : onValue,
  });
}

/**
 * Set attr to a void node at the caret or specified position.
 */
export function SetVoidAttr<
  T extends DocNode,
  N extends InferVoidNode<T>,
  K extends string,
>(
  editor: Editor<T>,
  key: K,
  value: ExtractAttrValue<N, K>,
  offset: number = editor.selection[0],
) {
  const leaf = getLeafAt(editor.doc, offset, true);
  if (leaf && !isTextNode(leaf[0])) {
    editor.apply({ type: "patch_node", path: leaf[2], key, value });
  }
}
