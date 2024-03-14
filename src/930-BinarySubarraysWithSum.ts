/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Sliding Window, Array
 */

function numSubarraysWithSum(nums: number[], goal: number): number {
    return slidingWindowAtMost(nums, goal) - slidingWindowAtMost(nums, goal - 1);
}

function slidingWindowAtMost(nums: number[], goal: number): number {
    if (goal < 0) return 0;

    let start = 0;
    let currentSum = 0;
    let totalCount = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (start <= end && currentSum > goal) {
            currentSum -= nums[start++];
        }

        totalCount += end - start + 1;
    }

    return totalCount;
}