/*
 Do not return anything, modify nums in-place instead.

 Constraints:
  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1
 
  Follow up: Could you minimize the total number of operations done?

  Thank you David Coxon (chordmemory) for this great solution!
  link to profile, https://leetcode.com/chordmemory/
  
  Alex Gavrilov (alexgavrilov) for another great solution! 
  link to profile, https://leetcode.com/alexgavrilov/
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

  // another solution
  // for (let i = 0, j = 0; i < nums.length; i++) {
  //   if (nums[i] != 0) {
  //     const x: number = nums[j];
  //     nums[j] = nums[i];
  //     nums[i] = x;
  //     j++;
  //   }
  // }
}
