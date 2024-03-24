/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array, fast and slow pointer, cycle detection

    Thank you, Deepak Negi for the solution!
    Link, https://leetcode.com/problems/find-the-duplicate-number/discuss/4916338/Floyd's-Cycle-Detection-or-or-Slow-Fast-Pointer-or-or-C%2B%2B-or-or-Java-or-or-Python3-or-or-Kotlin-or-or
*/

function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast)

    fast = nums[0];

    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow;
}
