/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Diffculty: Easy
  Tags: Array, hash map, daily
*/

function maxFrequencyElements(nums: number[]): number {
  let map = new Map<number, number>();
  let maxFrequency = 0;
  let count = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    maxFrequency = Math.max(maxFrequency, map.get(num) as number);
  }

  for (let [, value] of map) {
    if (value === maxFrequency) {
      count += value;
    }
  }

  return count;
};