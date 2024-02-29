import { TreeNode } from "./src/class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium
  Tags: Binary tree, BFS, daily

  Thank you zpbximaw for this solution!
  Link, https://leetcode.com/problems/even-odd-tree/discuss/4799226/TypescriptJavaScript-Solution-that-even-beats-your-mom's-friend's-son
*/

function isEvenOddTree(root: TreeNode | null): boolean {
  const stack = [root];
  let even = true;

  while (stack.length) {
    let size = stack.length;
    let prev = even === true ? -Infinity : Infinity;

    while (size) {
      const node = stack.shift();
      const val = node.val;

      if (even) {
        if (val % 2 === 0) return false;
        if (prev >= val) return false;
      } else {
        if (val % 2 !== 0) return false;
        if (prev <= val) return false;
      }

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);

      prev = val;
      size--;
    }

    even = !even;
  }

  return true;
};