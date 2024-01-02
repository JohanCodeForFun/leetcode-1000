/*
You are given a string s, which contains stars *.

In one operation, you can:
  Choose a star in s.
  Remove the closest non-star character to its left, as well as remove the star itself.
  Return the string after all stars have been removed.

Note:
  The input will be generated such that the operation is always possible.
  It can be shown that the resulting string will always be unique.

Constraints:
  1 <= s.length <= 105
  s consists of lowercase English letters and stars *.
  The operation above can be performed on s.
*/

import { removeStars } from "../src/2390-removeStars";

describe("2390: Remove Stars", () => {

  it("first test", () => {
    const s = "leet**cod*e"
    const test = removeStars(s);

    const result = "lecoe";

    expect(test).toBe(result);
  });
  
  it("second test", () => {
    const s = "erase*****"
    const result = "";
    
    const test = removeStars(s);

    expect(test).toBe(result);
  });

});
