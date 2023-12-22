/* 
  You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104
*/

import { findMaxAverage } from "../src/642-findMaxAverage";

describe("642: Find max average", () => {
  it("first test", () => {
    const nums = [1, 12, -5, -6, 50, 3],
      k = 4;
    const result = 12.75;

    const test = findMaxAverage(nums, k);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [5],
      k = 1;
    const result = 5.0;

    const test = findMaxAverage(nums, k);

    expect(test).toEqual(result);
  });
});
