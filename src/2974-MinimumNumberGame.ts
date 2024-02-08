/*
  Time Complexity: O(n^2)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array
*/

function numberGame(nums: number[]): number[] {
  let result = [];

  while (nums.length) {
    const minNumAlice = Math.min(...nums);
    nums.splice(nums.indexOf(minNumAlice), 1);

    const minNumBob = Math.min(...nums);
    nums.splice(nums.indexOf(minNumBob), 1);

    result.push(minNumBob);
    result.push(minNumAlice);
  }

  return result;
};