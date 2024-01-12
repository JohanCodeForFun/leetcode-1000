import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Time Complexity: O(n)

  Difficulty: Easy.
  Tags: Binary Tree, DFS preorder
*/

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) return [];

    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(root);

  return result;
}
