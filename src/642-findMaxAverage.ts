export function findMaxAverage(nums: number[], k: number): number {
  // Input: nums = [1,12,-5,-6,50,3], k = 4
  // Output: 12.75000
  // Explanation: Maximum average is,
  // (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}
