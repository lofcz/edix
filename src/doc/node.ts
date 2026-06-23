import type {
  BlockNode,
  DocNode,
  InlineNode,
  Node,
  Path,
  TextNode,
  DomPosition,
  SelectionSnapshot,
  Selection,
} from "./types.js";

/**
 * @internal
 */
export const isTextNode = (node: Node): node is TextNode => "text" in node;

/**
 * @internal
 */
export const isBlockNode = (node: Node): node is BlockNode =>
  "children" in node;

const sizeCache = new WeakMap<BlockNode, number>();

const calcBlockSize = (
  { children }: BlockNode,
  start: number = 0,
  end: number = children.length,
): number => {
  let size = 0;
  let count = 0;
  for (let i = start; i < end; i++) {
    const n = children[i]!;
    size += getNodeSize(n);
    if (count !== 0 && isBlockNode(n)) {
      size++;
    }
    count++;
  }
  return size;
};

export const getNodeSize = (node: Node): number => {
  if (isBlockNode(node)) {
    let size = sizeCache.get(node);
    if (size == null) {
      sizeCache.set(node, (size = calcBlockSize(node)));
    }
    return size;
  }
  return isTextNode(node) ? node.text.length : 1;
};

/**
 * @internal
 */
export const getChildAt = <T extends BlockNode>(
  { children }: T,
  offset: number,
): { _node: T["children"][number]; _index: number; _offset: number } | null => {
  const length = children.length;
  for (let i = 0; i < length; i++) {
    const node = children[i]!;
    let size = getNodeSize(node);
    if (isBlockNode(node)) {
      size++;
    }
    if (size > offset || (size === offset && isTextNode(node) && !node.text)) {
      return { _node: node, _index: i, _offset: offset };
    }
    offset -= size;
  }
  return null;
};

/**
 * @internal
 */
export const getBlockAt = (
  node: DocNode | BlockNode,
  offset: number,
): { _node: BlockNode; _path: Path; _offset: number } => {
  const path: number[] = [];
  while (node) {
    const found = getChildAt(node, offset);
    if (!found) {
      break;
    }
    const nextNode = found._node;
    if (!isBlockNode(nextNode)) {
      break;
    }
    offset = found._offset;
    node = nextNode;
    path.push(found._index);
  }
  return { _node: node, _path: path, _offset: offset };
};

/**
 * @internal
 */
export const getInlineAt = (
  node: DocNode | BlockNode,
  offset: number,
): { _node: InlineNode; _index: number; _offset: number } | null => {
  const block = getBlockAt(node, offset);
  return getChildAt(block._node, block._offset);
};

/**
 * @internal
 */
export const splitBlock = <T extends DocNode | BlockNode>(
  block: T,
  pos: number,
): [T, T] => {
  const children = block.children;
  const target = getChildAt(block, pos);
  if (target) {
    const { _node: node, _offset: offsetAtNode, _index: i } = target;
    if (isBlockNode(node)) {
      const [childBefore, childAfter] = splitBlock(node, offsetAtNode);
      const before = children.slice(0, i);
      const after = children.slice(i + 1);
      before.push(childBefore);
      after.unshift(childAfter);
      return [
        { ...block, children: before },
        { ...block, children: after },
      ];
    } else {
      const before = children.slice(0, i);
      const after = children.slice(i + 1);
      if (isTextNode(node)) {
        const beforeText = node.text.slice(0, offsetAtNode);
        const afterText = node.text.slice(offsetAtNode);
        if (beforeText || !before.length) {
          before.push({ ...node, text: beforeText });
        }
        if (afterText || !after.length) {
          after.unshift({ ...node, text: afterText });
        }
      } else {
        // node size must be 1
        after.unshift(node);
      }
      return [
        { ...block, children: before },
        { ...block, children: after },
      ];
    }
  }
  const last = children[children.length - 1]!;
  return [
    block,
    { ...block, children: isTextNode(last) ? [{ ...last, text: "" }] : [] },
  ];
};

/**
 * @internal
 */
export const positionToOffset = (
  node: DocNode | BlockNode,
  [path, offset]: DomPosition,
): number => {
  let size = 0;
  for (const p of path) {
    size += calcBlockSize(node, 0, p);
    if (p !== 0) {
      size++;
    }
    node = node.children[p]! as BlockNode;
  }
  return size + offset;
};

export const offsetToPosition = (
  node: DocNode | BlockNode,
  offset: number,
): DomPosition => {
  const res = getBlockAt(node, offset);
  return [res._path, res._offset];
};

/**
 * @internal
 */
export const domSelectionToSelection = (
  doc: DocNode,
  [anchor, focus]: SelectionSnapshot,
): Selection => {
  return [positionToOffset(doc, anchor), positionToOffset(doc, focus)];
};

/**
 * @internal
 */
export const selectionToDomSelection = (
  doc: DocNode,
  [anchor, focus]: Selection,
): SelectionSnapshot => {
  return [offsetToPosition(doc, anchor), offsetToPosition(doc, focus)];
};

/**
 * @internal
 */
export const sliceFragment = <T extends DocNode>(
  doc: T,
  start: number,
  end: number,
): T["children"] => {
  if (start >= end) {
    return [];
  }

  return splitBlock(splitBlock(doc, end)[0], start)[1].children;
};
