import { TreeNode } from "./class/TreeNode";
/*
  Time Complexity: O(n)
  Space Complexity: O(h)

  Thank you Ruben Chirino for this solution!
  Link, https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/discuss/4376876/Solution-using-recursion-(200ms-Beats-90)

  Difficulty: Medium.
  Tags: Binary Tree, DFS.
*/

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (cloned === null) return null;
  if (original === null) return null;
  if (original === target) return cloned;

  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
}

/*
Thank you Control The Narrative for this solution!
Link, https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/discuss/998841/JavaScript-Clean-DFS-and-BFS-Solutions

Solution-1: DFS
var getTargetCopy = function(original, cloned, target) {
  
  function traverse(oNode, cNode) {
      if(!oNode) return;
      if(oNode === target) return cNode;
      return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
  }
  return traverse(original, cloned);
};


Solution-2: BFS
var getTargetCopy = function(original, cloned, target) {
  let queue = [[original, cloned]];
  
  while(queue.length) {
      const next = [];
      
      for(let [oNode, cNode] of queue) {
          if(oNode === target) return cNode;
          if(oNode.left) next.push([oNode.left, cNode.left]);
          if(oNode.right) next.push([oNode.right, cNode.right]);
      }
      queue = next;
  }
};

*/
