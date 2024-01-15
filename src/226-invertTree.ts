import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, DFS.

  Thank you Arjun J Gowda for this solution!
  Link, https://leetcode.com/problems/invert-binary-tree/discuss/772069/Easy-Recursive-(-BFS-and-DFS)-or-Javascript
*/

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;

  if (root.left || root.right) {
    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
}
