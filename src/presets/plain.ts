import { docToString, stringToFragment } from "../doc/utils.js";
import { isTextNode } from "../doc/edit.js";
import { createEditor, type Editor, type EditorOptions } from "../editor.js";
import { singlelinePlugin } from "../plugins/index.js";
import type { BlockNode, InlineNode } from "../doc/types.js";

type PlainDoc = { children: { children: { text: string }[] }[] };

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
    const node = nodes[i]!;
    if (isTextNode(node)) {
      s += node.text;
    }
  }
  return s;
};

const computeDirtyRange = (
  prev: readonly BlockNode[],
  next: readonly BlockNode[],
): DirtyRange => {
  const oldLen = prev.length;
  const newLen = next.length;
  const scanEnd = Math.min(oldLen, newLen);

  let front = 0;
  while (front < scanEnd && prev[front] === next[front]) {
    front++;
  }

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
    lines[i] = lineText(next[front + i]!.children);
  }

  return { start: front, oldCount: oldBack - front, newCount: count, lines };
};

/**
 * A function to initialize editor with plaintext.
 */
export const createPlainEditor = ({
  text,
  singleline,
  onChange,
  ...opts
}: PlainEditorOptions): Editor<PlainDoc> => {
  const initialChildren = stringToFragment(text);
  let prevChildren: readonly BlockNode[] = initialChildren;
  const editor = createEditor({
    ...opts,
    doc: { children: initialChildren },
    onChange: (doc) => {
      const dirtyRange = computeDirtyRange(prevChildren, doc.children);
      prevChildren = doc.children;
      onChange(docToString(doc), dirtyRange);
    },
  });
  if (singleline) {
    editor.use(singlelinePlugin);
  }
  return editor;
};
