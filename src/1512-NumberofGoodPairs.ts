/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array
*/

function numIdenticalPairs(nums: number[]): number {
  let goodPairCount = 0;
  let map: { [key: string]: number } = {};

  for (let num of nums) {
    if (map[num]) {
      goodPairCount += map[num];
      map[num]++
    } else {
      map[num] = 1
    }
  }

  return goodPairCount;
};