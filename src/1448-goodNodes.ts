import { TreeNode } from "./class/TreeNode";

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let count = 0;
  let prev = root.val;

  const traverse = (node: TreeNode) => {
    if (!node) return;

    if (node.val >= prev) count++;
    if (node.left) traverse(node.left);
    prev = node.val;

    if (node.right) traverse(node.right);
  };

  traverse(root);

  return count;
}
