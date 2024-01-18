import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Easy.
  Tags: Binary Tree, DFS.

  Thank you Github Copilot for this solution!
*/

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // root.val === key
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // root has two children
    const minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  return root;
}

const findMin = (node: TreeNode): TreeNode => {
  while (node.left) {
    node = node.left;
  }
  return node;
};
