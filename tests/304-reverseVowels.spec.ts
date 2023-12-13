import { reverseVowels } from "../src/reverseVowels";

describe('test reverse vowels', () => { 
  
  it("first test", () => {
    const test = reverseVowels("hello");
    const result = "holle";

    expect(test).toBe(result);
  });

  it("second test", () => {
    const test = reverseVowels("leetcode");
    const result = "leotcede";

    expect(test).toBe(result);
  });

 })