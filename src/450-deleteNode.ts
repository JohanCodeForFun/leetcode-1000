import { TreeNode } from "./class/TreeNode";

/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Difficulty: Easy.
  Tags: Binary Tree, DFS.
*/

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const stack: TreeNode[] = [];

  const dfs = (node: TreeNode | null, val: number) => {
    if (!node) return null;

    if (node.val !== val) {
      stack.push(node);

      const left = dfs(node.left, val);
      if (left) return left;
      const right = dfs(node.right, val);
      if (right) return right;
    }
  };

  dfs(root, key);

  return stack;
}

/*
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []
*/
