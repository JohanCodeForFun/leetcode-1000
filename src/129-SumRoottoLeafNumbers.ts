import {TreeNode} from "./class/TreeNode";

/*
    Time Complexity: O(n)
    Space Complexity: O(h)

    Difficulty: Medium
    Tags: Tree, DFS.
*/
function sumNumbers(root: TreeNode | null): number {
    function dfs(cur: TreeNode | null, num: number): number {
        if (!cur) return 0;

        num = num * 10 + cur.val;

        if (!cur.left && !cur.right) {
            return num;
        }

        return dfs(cur.left, num) + dfs(cur.right, num);
    }

    return dfs(root, 0);
}
