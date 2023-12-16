/* 
Constraints:
  1 <= chars.length <= 2000
  chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
*/

import { compress } from "../src/334-string-compression";

describe("test string compression 334", () => {
  it("first test", () => {
    const chars = ["a","a","b","b","c","c","c"]
    const test = compress(chars);

    const result = ["a","2","b","2","c","3"]

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const chars = ["a"]
    const test = compress(chars);

    const result = ["a"]

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
    const test = compress(chars);

    const result = ["a","b","1","2"];

    expect(test).toEqual(result);
  });
});
