import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, BFS.

  Thank you mechaniccoder for this solution!
  Link, https://leetcode.com/problems/binary-tree-right-side-view/discuss/4535814/TypeScript-BFS-solution
*/

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    let prev = null;

    for (const index of Array(queue.length).keys()) {
      const node = queue.shift();

      if (node) {
        prev = node;

        const left = node.left;
        const right = node.right;

        if (left) queue.push(left);
        if (right) queue.push(right);
      }
    }

    if (prev) {
      result.push(prev.val);
    }
  }

  return result;
}
