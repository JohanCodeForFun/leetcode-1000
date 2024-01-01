/*
Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if 
the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
 
Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/

import { isValid } from "../src/20-validParentheses";

describe("20: Valid Parentheses", () => {

  it("first test", () => {
    const s = "()"

    const test = isValid(s);

    const result = true;

    expect(test).toBe(result);
  });
  
  it("second test", () => {
    const s = "()[]{}"
    const result = true;
    
    const test = isValid(s);

    expect(test).toBe(result);
  });

  it("third test", () => {
    const s = "(]"
    const result = false;
    
    const test = isValid(s);

    expect(test).toBe(result);
  });

  it("edge case", () => {
    const s = "{[]}"
    const result = true;
    
    const test = isValid(s);

    expect(test).toBe(result);
  });

});
