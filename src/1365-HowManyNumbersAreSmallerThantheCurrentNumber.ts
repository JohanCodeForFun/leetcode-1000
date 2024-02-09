/*
  Time Complexity: O(n^2)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags, Array, Math
*/

function smallerNumbersThanCurrent(nums: number[]): number[] {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j != i && nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count)

  }

  return result;
};