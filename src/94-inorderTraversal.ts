import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Time Complexity: O(n)

  Difficulty: Easy.
  Tags: Binary Tree, DFS inorder
*/

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) return [];

    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);

  return result;
}
