/*
  Time complexity: O(n)
  Space complexity: O(1)
*/

export function pivotIndex(nums: number[]): number {
  let totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];

    if (leftSum === totalSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}
