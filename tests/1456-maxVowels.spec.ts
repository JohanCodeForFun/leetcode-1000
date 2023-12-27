/*
Given a string s and an integer k, return the maximum 
number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Constraints:
  1 <= s.length <= 105
  s consists of lowercase English letters.
  1 <= k <= s.length
*/

import { maxVowels } from "../src/1456-maxVowels";

describe("1456: Max Vowels", () => {
  it("first test", () => {
    const s = "abciiidef", k = 3
    const result = 3;

    const test = maxVowels(s, k);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const s = "aeiou", k = 2
    const result = 2;

    const test = maxVowels(s, k);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const s = "leetcode", k = 3
    const result = 2;

    const test = maxVowels(s, k);

    expect(test).toEqual(result);
  });
});
