/* 
  You are given an integer array nums and an integer k.
  In one operation, you can pick two numbers from the 
  array whose sum equals k and remove them from the array.
  Return the maximum number of operations you can 
  perform on the array.
 
  Constraints:
    1 <= nums.length <= 105
    1 <= nums[i] <= 109
    1 <= k <= 109
*/

import { maxOperations } from "../src/1679-maxNumberOfKSomPairs";

describe("1679: Max number of k-sum pairs", () => {
  it("first test", () => {
    const nums = [1,2,3,4], k = 5
    const result = 2;

    const test = maxOperations(nums, k);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [3,1,3,4,3], k = 6
    const result = 1;

    const test = maxOperations(nums, k);

    expect(test).toEqual(result);
  });
  it("edge case", () => {
    const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k = 2;
    const result = 2;

    const test = maxOperations(nums, k);

    expect(test).toEqual(result);
  });
});
