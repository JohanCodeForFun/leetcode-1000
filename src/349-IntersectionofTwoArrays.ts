/*
  Time Complexity: O(n log n + m)
  Space Complexity: O(n + m)

  Difficulty: Easy
  Tags: Array, number, hash set, daily
*/

function intersection(nums1: number[], nums2: number[]): number[] {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let n = nums1.length - 1;
  let m = nums2.length - 1;
  let p1 = 0;
  let p2 = 0;

  let set = new Set();

  while (p1 <= n && p2 <= m) {
    if (nums1[p1] === nums2[p2]) {
      set.add(nums1[p1])
      p1++
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      p1++
    } else {
      p2++
    }
  }

  return [ ...set ] as number[]
};