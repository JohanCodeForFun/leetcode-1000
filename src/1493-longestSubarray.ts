/*
  Time Complexity: O(n).
  Space Complexity: O(1).
*/

export function longestSubarray(nums: number[]): number {

  let left = 0;
  let right = 0;
  let k = 1;

  while (right < nums.length) {
    if (nums[right] === 0) {
      k--;
    }

    if (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }

    right++;
  }

  return right - left - 1;
}
