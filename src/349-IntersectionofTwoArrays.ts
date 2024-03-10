/*
  Time Complexity: O(n + m)
  Space Complexity: O(n + m)

  Difficulty: Easy
  Tags: Array, number, hash set, daily
*/

function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  return [...set1].filter(num => set2.has(num));

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

  return [...set] as number[]
};