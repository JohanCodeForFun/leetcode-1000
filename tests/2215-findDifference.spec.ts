/*
  Given two 0-indexed integer arrays nums1 and nums2, 
  return a list answer of size 2 where:

  answer[0] is a list of all distinct integers in nums1 
  which are not present in nums2.
  answer[1] is a list of all distinct integers in nums2 
  which are not present in nums1.

  Note that the integers in the lists may be returned in any order.

Constraints:
  1 <= nums1.length, nums2.length <= 1000
  -1000 <= nums1[i], nums2[i] <= 1000
*/

import { findDifference } from "../src/2215-findDifference";

describe("2215: Find the Difference", () => {
  it("first test", () => {
    const nums1 = [1,2,3], nums2 = [2,4,6]
    const result = [[1,3],[4,6]];

    const test = findDifference(nums1, nums2);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums1 = [1,2,3,3], nums2 = [1,1,2,2]
    const result = [[3],[]];

    const test = findDifference(nums1, nums2);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const s = "1111"
    const result = 3;

    const test = maxScore(s);

    expect(test).toEqual(result);
  });
});
