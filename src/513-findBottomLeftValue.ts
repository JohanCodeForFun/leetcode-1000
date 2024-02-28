import { TreeNode } from "./class/TreeNode";
/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium
  Tags: Binary Tree, recursion
*/

function findBottomLeftValue(root: TreeNode | null): number {
  let maxDepth: number = -1;
  let bottomLeftValue: number = 0;

  function dfs(current: TreeNode | null, depth: number) {
    if (current === null) return;

    if (depth > maxDepth) {
      maxDepth = depth;
      bottomLeftValue = current.val
    }

    dfs(current.left, depth + 1);
    dfs(current.right, depth + 1);
  }

  dfs(root, 0)

  return bottomLeftValue;
};
