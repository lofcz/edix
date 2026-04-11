import { docToString, stringToFragment } from "../doc/utils.js";
import { isTextNode } from "../doc/edit.js";
import { createEditor, type Editor, type EditorOptions } from "../editor.js";
import { singlelinePlugin } from "../plugins/index.js";
import type { EditorPlugin } from "../plugins/types.js";
import type { InlineNode } from "../doc/types.js";

type PlainDoc = { children: { text: string }[][] };

/**
 * Describes which lines changed between two document snapshots.
 * Starting at line `start`, `oldCount` lines were replaced with `newCount` lines.
 * `lines` contains the text content of the new lines in the dirty window.
 */
export interface DirtyRange {
  start: number;
  oldCount: number;
  newCount: number;
  lines: string[];
}

export interface PlainEditorOptions extends Omit<
  EditorOptions<PlainDoc>,
  "doc" | "schema" | "onChange"
> {
  /**
   * Initial document text.
   */
  text: string;
  /**
   * TODO
   */
  singleline?: boolean;
  /**
   * Callback invoked when document changes.
   */
  onChange: (text: string, dirtyRange: DirtyRange) => void;
}

const lineText = (nodes: readonly InlineNode[]): string => {
  let s = "";
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i]!;
    if (isTextNode(n)) s += n.text;
  }
  return s;
};

/**
 * Compute the dirty range between two children arrays using reference equality.
 */
const computeDirtyRange = (
  prev: readonly (readonly InlineNode[])[],
  next: readonly (readonly InlineNode[])[],
): DirtyRange => {
  const oldLen = prev.length;
  const newLen = next.length;
  const scanEnd = Math.min(oldLen, newLen);

  let front = 0;
  while (front < scanEnd && prev[front] === next[front]) front++;

  let oldBack = oldLen;
  let newBack = newLen;
  while (
    oldBack > front &&
    newBack > front &&
    prev[oldBack - 1] === next[newBack - 1]
  ) {
    oldBack--;
    newBack--;
  }

  const count = newBack - front;
  const lines: string[] = new Array(count);
  for (let i = 0; i < count; i++) {
    lines[i] = lineText(next[front + i]!);
  }

  return { start: front, oldCount: oldBack - front, newCount: count, lines };
};

/**
 * A function to initialize editor with plaintext.
 */
export const createPlainEditor = ({
  text,
  singleline,
  plugins: optsPlugins = [],
  onChange,
  ...opts
}: PlainEditorOptions): Editor<PlainDoc> => {
  const plugins: EditorPlugin[] = [...optsPlugins];
  if (singleline) {
    plugins.unshift(singlelinePlugin());
  }
  const initialChildren = stringToFragment(text);
  let prevChildren: readonly (readonly InlineNode[])[] = initialChildren;
  return createEditor({
    ...opts,
    doc: { children: initialChildren },
    plugins,
    onChange: (doc) => {
      const dirty = computeDirtyRange(prevChildren, doc.children);
      prevChildren = doc.children;
      onChange(docToString(doc), dirty);
    },
  });
};
