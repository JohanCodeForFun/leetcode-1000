/*
  Time Compleity: O(n)
  Space Compleity: O(n)

  Difficulty: Easy
  Tags: Array, number, daily
*/

function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];

  for (let num of nums) {
    result.push(num * num);
  }

  return result.sort((a, b) => a - b);
};