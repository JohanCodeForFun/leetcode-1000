import { TreeNode } from "./class/TreeNode"

export function maxDepth(root: TreeNode | null): number {
  if(!root) return 0

 let left = maxDepth(root.left)
 let right = maxDepth(root.right)

 return Math.max(left,right) + 1
 
  /*
  let depth = 0;
  const dfs = (node) => {
      if (!node) {
          if (node.left !== null && node.right !== null) {
              depth++                
          }
      }
  }
  dfs(root)
  return depth
  */
};