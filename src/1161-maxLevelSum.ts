import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, BFS, Queue.

  Thank you Myroslav for this solution!
  Link, https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/discuss/4218518/BFS-or-QUEUE-or-TYPESCRIPT-or-94!!!
*/

function maxLevelSum(root: TreeNode | null): number {
  if (root === null) return 0;

  let maxValue = -Infinity;
  let maxLevel = 0;
  let level = 0;
  let queue = [root];

  while (queue.length) {
    let sum = 0;
    const temp = [];

    for (const index of Array(queue.length).keys()) {
      const node = queue.shift();

      if (node) {
        if (node.left) temp.push(node.left);
        if (node.right) temp.push(node.right);
        sum += node.val;
      }
    }
    queue = temp;
    level++;

    if (sum > maxValue) {
      maxValue = sum;
      maxLevel = level;
    }
  }

  return maxLevel;
}
