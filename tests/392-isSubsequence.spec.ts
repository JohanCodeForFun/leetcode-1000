/* 
  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

  A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

  Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.
*/

import { isSubsequence } from "../src/392-isSubsequence";

describe.only("392: is subsequende", () => {
  it("first test", () => {
    const s = "abc", t = "ahbgdc";
    const result = true;

    const test = isSubsequence(s, t);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const s = "axc", t = "ahbgdc";
    const result = false;

    const test = isSubsequence(s, t);

    expect(test).toEqual(result);
  });
});
