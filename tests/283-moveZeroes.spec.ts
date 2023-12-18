/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:
  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?
*/

import { moveZeroes } from "../src/283-moveZeroes";

describe("test move zeroes 283", () => {
  it("first test", () => {
    const nums = [0,1,0,3,12]
    const test =  moveZeroes(nums);

    const result = [1,3,12,0,0]

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [0];
    const test =  moveZeroes(nums);

    const result = [0]

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const nums = [2, 1, 0, 3, 0, 4];
    moveZeroes(nums);
    expect(nums).toEqual([2, 1, 3, 4, 0, 0]);
  });

});
