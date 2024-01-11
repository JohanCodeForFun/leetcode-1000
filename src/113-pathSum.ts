import { TreeNode } from "./class/TreeNode";

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) return [];
  let result: number[] = [];

  function traverse(currentNode: TreeNode) {
    result.push(currentNode.val)
    if (currentNode.left) traverse(currentNode.left)
    const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if(sum === targetSum) {
      return result;
    } else {
      result.pop();
    }
    if (currentNode.right) traverse(currentNode.right)
    if(sum === targetSum) {
      return result;
    } else {
      result = [];
    }
  }
  traverse(root)

  return result;
  // (
  // !!hasPathSum(root.left, targetSum - root.val) ||
  // !!hasPathSum(root.right, targetSum - root.val)
  // );
}
