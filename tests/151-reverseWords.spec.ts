/* 
Constraints:
  1 <= s.length <= 104
  s contains English letters (upper-case and lower-case), digits, and spaces ' '.
  There is at least one word in s.
*/

import { reverseWords } from "../src/151-reverseWords";

describe("test reverse linked list 206", () => {
  it("first test", () => {
    const s = "the sky is blue"
    const test =  reverseWords(s);

    const result = "blue is sky the"

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const s = "  hello world  "
    const test =  reverseWords(s);

    const result = "world hello"

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const s = "a good   example"
    const test =  reverseWords(s);

    const result = "example good a"

    expect(test).toEqual(result);
  });

});
