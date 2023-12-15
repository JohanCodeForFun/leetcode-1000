/*
  Input: nums = [1,2,3,4,5]
  Output: true
  Explanation: Any triplet where i < j < k is valid.
*/

export const increasingTriplet = (nums: number[]): boolean => {
  console.log(nums)
  for (let index = 0; index < nums.length; index++) {
    const i = nums[nums.length - 1];
    const j = nums[nums.length - 2];
    const k = nums[nums.length - 3];

    if (i > j) {
      if (j > k) {
        return true;
      }
    }
  }
  return false;
};
