/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array
*/

function maximumDifference(nums: number[]): number {
  let maxDifference = 0;
  let min = Infinity;

  for (let num of nums) {
    min = Math.min(min, num)
    maxDifference = Math.max(maxDifference, num - min)
  }

  return maxDifference === 0 ? -1 : maxDifference;
};