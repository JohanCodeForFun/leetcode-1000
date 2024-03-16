/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Medium
    Tags: Array
*/

function findMaxLength(nums: number[]): number {
    let maxLength = 0;
    let count = 0;
    let cache: { [key: number]: number } = { 0: -1 };

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1;

        if (count in cache) {
            maxLength = Math.max(maxLength, i - cache[count]);
        } else {
            cache[count] = i;
        }
    }

    return maxLength;
}
