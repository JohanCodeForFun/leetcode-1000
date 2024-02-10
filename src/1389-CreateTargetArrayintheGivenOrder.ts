/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Arrays, Insert
*/

function createTargetArray(nums: number[], index: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < index.length; i++) {
    result.splice(index[i], 0, nums[i])
  }

  return result;
};