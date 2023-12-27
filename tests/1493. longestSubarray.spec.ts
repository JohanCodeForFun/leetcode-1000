/*
  Given a binary array nums, you should delete one element from it.
  Return the size of the longest non-empty subarray containing 
  only 1's in the resulting array. Return 0 if there is no such subarray.

Constraints:
  1 <= nums.length <= 105
  nums[i] is either 0 or 1.
*/

import { longestSubarray } from "../src/1493-longestSubarray";

describe("1493: Longest Sub Array", () => {

  it("first test", () => {
    const nums = [1,1,0,1];
    const result = 3;

    const test = longestSubarray(nums);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [0,1,1,1,0,1,1,0,1]
    const result = 5;

    const test = longestSubarray(nums);

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const nums = [1,1,1]
    const result = 2;

    const test = longestSubarray(nums);

    expect(test).toEqual(result);
  });

});
