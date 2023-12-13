
describe('test reverse vowels', () => { 
  
  it("first test", () => {
    const test = reverseVowels("hello");
    const result = "holle";

    expect(test).toStrictEqual(result);
  });

  it("second test", () => {
    const test = reverseVowels("leetcode");
    const result = "leotcede";

    expect(test).toStrictEqual(result);
  });

 })