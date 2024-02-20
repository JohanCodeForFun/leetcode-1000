/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, hash map
*/

function singleNumber(nums: number[]): number {
  let map = new Map<number, number>();

  for (let num of nums) {
    if (map.get(num) !== undefined) {
      map.delete(num)
    } else {
      map.set(num, 1)
    }
  }

  let keys = map.keys();
  let singleKey = keys.next().value;

  return singleKey;
};
