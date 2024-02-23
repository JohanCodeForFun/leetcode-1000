/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, two pointers, numbers
*/

function getCommon(nums1: number[], nums2: number[]): number {
  let first = 0;
  let second = 0;

  while (first < nums1.length && second < nums2.length) {
    if (nums1[first] === nums2[second]) {
      return nums1[first];

    } else if (nums1[first] < nums2[second]) {
      first++;
    } else {
      second++;
    }
  }

  return -1;
};
