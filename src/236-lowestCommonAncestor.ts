import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, DFS
*/

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || !p || !q) return null;

  if (root.val === p.val || root.val === q.val) return root
  
  const leftSearch = lowestCommonAncestor(root.left, p, q);
  const rightSearch = lowestCommonAncestor(root.right, p, q);
  
  if (leftSearch === null) return rightSearch;
  if (rightSearch === null) return leftSearch;
    
  return root;
};



  /* 
  function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || !p || !q) return null;

  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
  };

  1) base case
  If either the left or right search result is null, 
  it means we have found one node but not the other. 
  In this case, we return the root as the Lowest Common Ancestor (LCA).

  2) recursive case
  If both node values are greater than the root's value, 
  it indicates that the Lowest Common Ancestor (LCA) must be located within the right subtree.

  If both node values are less than the root's value, 
  it indicates that the Lowest Common Ancestor (LCA) must be located within the left subtree.

  3) 
  If the values of the two nodes diverge at this point (one is in the left subtree and the other is in the right subtree),
  then we have found our Lowest Common Ancestor (LCA).
  */