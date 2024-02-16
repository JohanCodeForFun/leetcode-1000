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

  let iterator = numMap.entries();

  for (let i = 0; i <= numMap.size; i++) {
    let entry = iterator.next();
    let key = entry.value[0];
    let value = entry.value[1];

    console.log(key, value)
    console.log("loop", i, numMap.size)

    if (value <= k) {
      k -= value
      numMap.delete(key);
    } else {
      break;
    }
  }

  return numMap.size
};
