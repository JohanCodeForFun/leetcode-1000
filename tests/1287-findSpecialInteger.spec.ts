/* 
  Given an integer array sorted in non-decreasing order, 
  there is exactly one integer in the array that occurs 
  more than 25% of the time, return that integer.

Constraints:
  1 <= arr.length <= 104
  0 <= arr[i] <= 105
*/

import { findSpecialInteger } from "../src/1287-findSpecialInteger";

describe.only("1287: find special integer", () => {
  it("first test", () => {
    const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
    const result = 6;

    const test = findSpecialInteger(arr);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const arr = [1, 1];
    const result = 1;

    const test = findSpecialInteger(arr);

    expect(test).toEqual(result);
  });

  it("edge case", () => {
    const arr = [6700, 8858, 8858, 8858, 8858];
    const result = 8858;

    const test = findSpecialInteger(arr);

    expect(test).toEqual(result);
  });
});
