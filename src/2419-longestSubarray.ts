/**
 * @param {number[]} nums
 * @return {number}
 */

// Thank you UP41GUY, for this elegant solution.
// Link to profile, https://leetcode.com/u/UP41Guy/

var longestSubarray = function(nums: number[]) {
  let max = 0;
  let count = 0;
  const maxBitwise = Math.max(...nums);
  
  nums.forEach((num) => {
      count = (maxBitwise === num) ? count + 1 : 0;
      max = Math.max(max, count);
  })
  
  return max;
};
