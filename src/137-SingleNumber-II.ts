/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Medium
  Tags: Array, hash map
*/

function singleNumber(nums: number[]): number {
  let map = new Map<number, number>();
  let uniqueNum = Infinity;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [value, key] of map) {
    if (key === 1) {
      uniqueNum = value;
    }
  }

  return uniqueNum;
};