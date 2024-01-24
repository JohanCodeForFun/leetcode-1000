/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy.
  Tags: Array, Two Pointers.

  Thank you Max Ulyanov for this solution!
  Link, https://leetcode.com/problems/sort-array-by-parity/discuss/4299826/Two-pointer
*/

function sortArrayByParity(nums: number[]): number[] {
  const result = Array(nums.length);
  let eventPointer = 0;
  let oddPointer = nums.length - 1;

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 0) {
          result[eventPointer] = nums[i];
          eventPointer++;
      }
      else {
          result[oddPointer] = nums[i];
          oddPointer--;
      }
  }

  return result;
};
