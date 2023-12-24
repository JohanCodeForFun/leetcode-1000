/*
  Given a binary array nums and an integer k, 
  return the maximum number of consecutive 1's in 
  the array if you can flip at most k 0's.

Constraints:
  1 <= nums.length <= 105
  nums[i] is either 0 or 1.
  0 <= k <= nums.length
*/

import { longestOnes } from "../src/1004-longestOnes";

describe("1004: Longest Ones", () => {

  it("first test", () => {
    const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
    const result = 6;

    const test = longestOnes(nums, k);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
    const result = 10;

    const test = longestOnes(nums, k);

    expect(test).toEqual(result);
  });

});
