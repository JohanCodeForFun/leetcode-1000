import { gcdOfStrings } from "../src/greatestCommonDivisorofStrings";
/*
  For two strings s and t, we say "t divides s" 
  if and only if s = t + ... + t (i.e., t is 
  concatenated with itself one or more times).

  Given two strings str1 and str2, 
  return the largest string x such that x 
  divides both str1 and str2.

  Constraints:
  1 <= str1.length, str2.length <= 1000
  str1 and str2 consist of English uppercase letters.
*/

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

describe('test merge strings alternately', () => { 
  
  it('first test', () => {
    const str1 = "ABCABC"
    const str2 = "ABC"

    const result = "ABC";

    const test = gcdOfStrings(str1, str2);

    expect(test).toBe(result);
  });

  it('second test', () => {
    const str1 = "ABABAB"
    const str2 = "ABAB"

    const result = "AB";

    const test = gcdOfStrings(str1, str2);

    expect(test).toBe(result);
  });

  it('third test', () => {
    const str1 = "LEET"
    const str2 = "CODE"

    const result = "";

    const test = gcdOfStrings(str1, str2);

    expect(test).toBe(result);
  });

 });