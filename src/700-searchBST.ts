import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Easy.
  Tags: Binary Tree, DFS, BFS.
*/

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  const dfs = (node: TreeNode | null, val: number): TreeNode | null => {
    if (!node) return null;

    if (node.val === val) {
      return node;
    } else {
      const left = dfs(node.left, val);
      if (left) return left;
      const right = dfs(node.right, val);
      if (right) return right;
    }
    return null;
  };

  return dfs(root, val);
}

/*
Thank you Teabag Coder for this solution!
Link, https://leetcode.com/problems/search-in-a-binary-search-tree/discuss/3274313/oror-BFS-oror-TYPESCRIPT-oror-69.96-oror-CLICK-oror

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let q = [root];
  while(q.length > 0) {
      let node = q.shift();
      if(node.val === val) return node;
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
  }
  return null;
};
*/