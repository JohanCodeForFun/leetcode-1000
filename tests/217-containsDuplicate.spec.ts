/* 
  Given an integer array nums, return true if any 
  value appears at least twice in the array, and 
  return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:
  1 <= nums.length <= 105
  -109 <= nums[i] <= 109
*/

import { containsDuplicate } from "../src/217-containsDuplicate";

describe("217: Contains Duplicate", () => {
  it("first test", () => {
    const nums = [1,2,3,1]
    const test =  containsDuplicate(nums);

    const result = true;

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [1,2,3,4]
    const test =  containsDuplicate(nums);

    const result = false;

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const nums = [1,1,1,3,3,4,3,2,4,2]
    const test =  containsDuplicate(nums);

    const result = true;

    expect(test).toEqual(result);
  });

});
