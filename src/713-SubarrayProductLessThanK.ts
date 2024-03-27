/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array

    Thank you NeetCode for this solution!
    Link, https://www.youtube.com/watch?v=Cg6_nF7YIks
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let product = 1;
    let res = 0;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        product *= nums[r];

        while (l <= r && product >= k) {
            product = product /= nums[l]
            l++
        }

        res += r - l + 1;
    }

    return res;
}
