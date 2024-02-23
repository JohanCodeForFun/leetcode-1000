/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, numbers, hash map
*/

function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const result: number[] = [];

  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    let count = map.get(num)

    if (count && count > 0) {
      result.push(num);
      map.set(num, count - 1)
    }
  }

  return result;
};
