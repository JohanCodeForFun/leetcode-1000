/*
  Time Complexity: O(n log n)
  Space Complexity: O(n)

  Difficulty: Medium
  Tags: Array, hash map, daily
*/

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  let numMap = new Map<number, number>();
  for (let num of arr) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  numMap = new Map([...numMap.entries()].sort((a, b) => a[1] - b[1]));

  for (let [key, value] of numMap) {
    if (value <= k) {
      k -= value;
      numMap.delete(key)
    } else {
      break;
    }
  }

  return numMap.size
};
