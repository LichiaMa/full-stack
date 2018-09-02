class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 *二叉搜索树
 *
 * @class BinarySearchTree
 */
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let node = new Node(key);

    if (!this.root) {
      this.root = node;
    } else {
      insertNode(this.root, node);
    }

    function insertNode(root, node) {
      if (node.key < root.key) {
        if (root.left === null) {
          root.left = node;
        } else {
          insertNode(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          insertNode(root.right, node);
        }
      }
    }
  }
}
