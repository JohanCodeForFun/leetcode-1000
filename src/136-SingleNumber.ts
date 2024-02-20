/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, hash map
*/

function singleNumber(nums: number[]): number {
  let numMap = new Map<number, number>();
  let uniqueNum = Infinity;

  for (let num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  for (let [value, key] of numMap) {
    if (key === 1) {
      uniqueNum = value;
    }
  }

  return uniqueNum;
};