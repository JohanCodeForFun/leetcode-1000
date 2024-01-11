import { TreeNode } from "./class/TreeNode";
/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty, medium
  Tags: Binary tree, DFS
*/

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let result: number[][] = [];
  const path: number[] = [];

  function traverse(node: TreeNode | null, remainingSum: number): void {
    if (root === null || node === null) return;

    path.push(node.val);

    if (
      node.left === null &&
      node.right === null &&
      remainingSum === node.val
    ) {
      result.push(Array.from(path));
    }

    traverse(node.left, remainingSum - node.val);
    traverse(node.right, remainingSum - node.val);
    path.pop();
  }

  traverse(root, targetSum);
  return result;
}
