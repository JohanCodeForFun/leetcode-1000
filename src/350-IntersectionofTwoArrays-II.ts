/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, numbers, hash map
*/

function intersect(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();
  const result: number[] = [];

  for (let num of nums1) {
    map1.set(num, (map1.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    map2.set(num, (map2.get(num) || 0) + 1);
  }

  console.log(map1, map2)

  for (let [key, value1] of map1) {
    if (map2.has(key)) {
      let value2 = map2.get(key)
      let minCount = Math.min(value1, value2)

      for (let i = 0; i < minCount; i++) {
        result.push(key)
      }
    }
  }

  return result;
};
