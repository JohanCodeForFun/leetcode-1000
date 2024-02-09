/*
  Time Complexity: O(n^2)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array
*/

function numIdenticalPairs(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        count++
      }
    }
  }

  return count
};