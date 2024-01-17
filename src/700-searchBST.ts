import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Easy.
  Tags: Binary Tree, DFS.
*/

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  const dfs = (node: TreeNode | null, val: number): TreeNode | null => {
    if (!node) return null;

    if (node.val === val) {
      return node;
    } else {
      const left = dfs(node.left, val);
      if (left) return left;
      const right = dfs(node.right, val);
      if (right) return right;
    }
    return null;
  };

  return dfs(root, val);
}