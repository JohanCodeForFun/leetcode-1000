import { TreeNode } from "./class/TreeNode";
/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Thank you Ruben Chirino for this solution!
  Link, https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/discuss/4376876/Solution-using-recursion-(200ms-Beats-90)

  Difficulty: Medium.
  Tags: Binary Tree, DFS.
*/

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (cloned === null) return null;
  if (original === null) return null;
  if (original === target) return cloned;

  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
}
