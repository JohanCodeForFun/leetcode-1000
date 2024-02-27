import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Easy
  Tags: Binary tree, recursion, post-order traversal
*/

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;

  const dfs = (node: TreeNode | null) => {
    if (node === null) return 0;

    const left: number = dfs(node.left);
    const right: number = dfs(node.right);

    if (left !== undefined && right !== undefined) {
      ans = Math.max(ans, left + right);
    }

    return Math.max(left, right) + 1
  }

  dfs(root);

  return ans;
};