/*
Given two strings s and t, return true if they are 
equal when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, 
the text will continue empty.

 

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:
  1 <= s.length, t.length <= 200
  s and t only contain lowercase letters and '#' characters.
 
Follow up: Can you solve it in O(n) time and O(1) space?
*/

import { backspaceCompare } from "../src/844-backspaceCompare";

describe("20: Valid Parentheses", () => {

  it("first test", () => {
    const s = "ab#c", t = "ad#c"

    const test = backspaceCompare(s, t);

    const result = true;

    expect(test).toBe(result);
  });
  
  it("second test", () => {
    const s = "ab##", t = "c#d#"
    const result = true;
    
    const test = backspaceCompare(s, t);

    expect(test).toBe(result);
  });

  it("third test", () => {
    const s = "a#c", t = "b"
    const result = false;
    
    const test = backspaceCompare(s, t);

    expect(test).toBe(result);
  });

});
