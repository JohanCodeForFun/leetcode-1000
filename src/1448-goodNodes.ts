import { TreeNode } from "./class/TreeNode";
/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, DFS
*/

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let count = 0;

  const traverse = (node: TreeNode | null, max: number) => {
    if (!node) return;

    if (node.val >= max) {
      max = node.val;
      count++;
    }

    traverse(node.left, max);
    traverse(node.right, max);
  };

  traverse(root, root.val);

  return count;
}
