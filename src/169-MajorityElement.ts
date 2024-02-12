/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Boyer–Moore majority vote algorithm, hash map

  Thank you gilish for this solution!
  Link, https://leetcode.com/problems/majority-element/discuss/2686685/Typescript-solution-O(n)-time-O(1)-space-%2B-Explanation
*/

function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};