export function maxOperations(nums: number[], k: number): number {
  // nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4]
  // k = 2;

  // result = 2;

  const n = nums.length;

  let left = 0;
  let right = n - 1;

  let count = 0;

  while (left < right) {
    if (nums[left] + nums[right] === k) {
      count++;
      left++;
    } else {
      right--;
    }
  }

  return count;
}
