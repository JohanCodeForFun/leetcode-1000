import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, DFS, description
*/

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || !p || !q) return null;

  if (root.val === p.val || root.val === q.val) return root
  
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};

/*
1) Base case
  Checking if any of the input nodes are null, 
  and if so, it's returning null immediately.

2) Checking if the root's value is equal to either of the input node's values.
  If either the left or right search result is null, 
  it means we have found one node but not the other. 
  In this case, we return the root as the Lowest Common Ancestor (LCA).

3) Recursive case
  If both node values are greater than the root's value, 
  it indicates that the Lowest Common Ancestor (LCA)
  must be located within the right subtree.

  If both node values are less than the root's value, 
  it indicates that the Lowest Common Ancestor (LCA)
  must be located within the left subtree.

4) If the values of the two nodes diverge at this point 
  (one is in the left subtree and the other is in the right subtree),
  then we have found our Lowest Common Ancestor (LCA).
*/


