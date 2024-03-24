/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array
*/

function findDuplicate(nums: number[]): number {
    let result: number = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                result = nums[i]
            }
        }
    }

    return result
};