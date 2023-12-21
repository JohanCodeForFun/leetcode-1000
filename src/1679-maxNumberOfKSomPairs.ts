export function maxOperations(nums: number[], k: number): number {
  const n = nums.length;
  const _nums = nums.sort((n1, n2) => n1 - n2)

  let left = 0;
  let right = n - 1;

  let count = 0;

  while (left < right) {
    if (_nums[left] + _nums[right] < k) {
      left++;
    } else if (_nums[left] + _nums[right] > k) {
      right--;
    } else {
      left++;
      right--;

      count++;
    }
  }

  return count;
}
