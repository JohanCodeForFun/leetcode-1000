/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array

    Thank you NeetCode for this solution!
    Link, https://www.youtube.com/watch?v=Y8x0iAVEITo
*/

function findDuplicates(nums: number[]): number[] {
    const result = [];

    for (let n of nums) {
        n = Math.abs(n)

        if (nums[n - 1] < 0) {
            result.push(n)
        }

        nums[n - 1] = -nums[n - 1];
    }

    return result;
}
