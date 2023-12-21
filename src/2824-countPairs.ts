export function countPairs(nums: number[], target: number): number {
  /*
    Given a 0-indexed integer array nums of length n 
    and an integer target, return the number of pairs (i, j) 
    where 0 <= i < j < n and nums[i] + nums[j] < target.
  */

  nums.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
}
