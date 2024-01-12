import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Time Complexity: O(n)

  Difficulty: Easy.
  Tags: Binary Tree, DFS postorder
*/

function postorderTraversalTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  const traverse = (node: TreeNode | null) => {
    if (!node) return [];

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val);
  };
  traverse(root);

  return result;
}
