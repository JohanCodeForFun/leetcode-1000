import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Medium.
  Tags: Binary Tree, DFS.
*/

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) return null;
  if (root1 && !root2) return root1;
  if (!root1 && root2) return root2;

  let root = new TreeNode((root1 ? root1.val : 0) + (root2 ? root2.val : 0));
  root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
  root.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);
  return root;
}

/*
DESRCRIPTION:

Tree 1:       Tree 2:
     1             2
    / \           / \
   3   2         1   3
  /               \   \
 5                 4   7

The block of code you've selected would work as follows (line 21-25):
- It first checks if both root nodes of the trees (root1 and root2) have a value. In our example, both root nodes have values (1 and 2), so it enters the if block.
- It then creates a new node with a value equal to the sum of the values of root1 and root2 (1 + 2 = 3). This new node becomes the root of the merged tree.
- It then makes recursive calls to mergeTrees for the left and right children of root1 and root2. The results of these calls become the left and right children of the new root node.
- This process continues recursively for all nodes in both trees.

Merged:
     3
    / \
   4   5
  / \   \
  5   4   7

*/
