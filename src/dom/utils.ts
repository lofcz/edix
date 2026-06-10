const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;

/**
 * @internal
 */
export const isTextNode = (node: Node): node is Text => {
  return node.nodeType === TEXT_NODE;
};

/**
 * @internal
 */
export const isElementNode = (node: Node): node is Element => {
  return node.nodeType === ELEMENT_NODE;
};

/**
 * @internal
 */
export const isCommentNode = (node: Node): node is Comment => {
  return node.nodeType === COMMENT_NODE;
};
