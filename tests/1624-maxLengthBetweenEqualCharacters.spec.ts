/*
  Given a string s, return the length of the longest 
  substring between two equal characters, excluding 
  the two characters. If there is no such substring 
  return -1.

  A substring is a contiguous sequence of characters 
  within a string.

Constraints:
  1 <= s.length <= 300
  s contains only lowercase English letters.
*/

import { maxLengthBetweenEqualCharacters } from "../src/1624-maxLengthBetweenEqualCharacters";

describe("1624: Max length...", () => {
  it("first test", () => {
    const s = "aa"
    const result = 0;

    const test = maxLengthBetweenEqualCharacters(s);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const s = "abca"
    const result = 2;

    const test = maxLengthBetweenEqualCharacters(s);

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const s = "cbzxy"
    const result = -1;

    const test = maxLengthBetweenEqualCharacters(s);

    expect(test).toEqual(result);
  });
  it("edge case", () => {
    const s = "aydsicwrfybunpqsdsnenvrfirr"
    const result = 19;

    const test = maxLengthBetweenEqualCharacters(s);

    expect(test).toEqual(result);
  });

});
