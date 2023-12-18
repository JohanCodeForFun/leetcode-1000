/*
 Do not return anything, modify nums in-place instead.

 Constraints:
  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1
 
  Follow up: Could you minimize the total number of operations done?

  Thank you David Coxon (chordmemory) for this great solution!
  link, https://leetcode.com/chordmemory/
*/

export function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;

    if (val !== 0) {
      nums[writePointer] = val;
      writePointer++;
    }
  }
}
