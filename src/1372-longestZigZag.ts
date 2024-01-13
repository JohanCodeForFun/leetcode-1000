import { TreeNode } from "./class/TreeNode";
/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

function longestZigZag(root: TreeNode | null): number {
  if (!root) return 0;
  // if (root.val === 1) return 0;
  const stack: string[] = [];
  let zigCount = 0;
  
  const traverse = (node: TreeNode) => {
      if (!node) return;
      
      if (node.left) {
          stack.push("left")
          traverse(node.left)
      }
      if (node.right) {
          stack.push("right")
          traverse(node.right)
      }
  }
  traverse(root);
  console.log(stack)
  
  stack.forEach((obj, index) => {
      let next = stack[index + 1];
      if (obj !== next && next !== undefined) {
          console.log("count...", obj, next)
          zigCount++;
      }
  })
  return zigCount - 1;
};