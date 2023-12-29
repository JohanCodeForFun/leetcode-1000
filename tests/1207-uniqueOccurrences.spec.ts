/*
  Given an array of integers arr, return true if the 
  number of occurrences of each value in the array 
  is unique or false otherwise.

Constraints:
  1 <= arr.length <= 1000
  -1000 <= arr[i] <= 1000
*/

import { uniqueOccurrences } from "../src/1207-uniqueOccurrences";

describe("1207: Unique Occurrences", () => {
  it("first test", () => {
    const arr = [1,2,2,1,1,3]
    const result = true;

    const test = uniqueOccurrences(arr);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const arr = [1,2]
    const result = false;

    const test = uniqueOccurrences(arr);

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const arr = [-3,0,1,-3,1,1,1,-3,10,0]
    const result = true;

    const test = uniqueOccurrences(arr);

    expect(test).toEqual(result);
  });

});
