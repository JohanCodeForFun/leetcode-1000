import {TreeNode} from "./class/TreeNode";

/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Easy
    Tags: Tree.
*/

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0;

    let ans = 0;

    if (root.left) {
        if (!root.left.left && !root.left.right) {
            ans += root.left.val
        } else {
            ans += sumOfLeftLeaves(root.left)
        }
    }

    ans += sumOfLeftLeaves(root.right);

    return ans;
};
