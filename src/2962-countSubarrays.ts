/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array
*/

function countSubarrays(nums: number[], k: number): number {
    let maxElement = Math.max(...nums);
    let maxElementsInWindow = 0;
    let ans = 0;

    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === maxElement) {
            maxElementsInWindow++;
        }

        while (k === maxElementsInWindow) {
            if (nums[start] === maxElement) {
                maxElementsInWindow--;
            }

            start++
        }

        ans += start
    }

    return ans;
}
