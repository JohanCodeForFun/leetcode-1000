import { mergeAlternately } from "../src/merge-strings-alternately";

/*
  Constraints:
  1 <= word1.length, word2.length <= 100
  word1 and word2 consist of lowercase English letters.
*/

describe('test merge strings alternately', () => { 
  
  it('first test', () => {
    const word1 = "abc"
    const word2 = "pqr"

    const result = "apbqcr";

    const test = mergeAlternately(word1, word2);

    expect(result).toBe(test);
  });
  it('second test', () => {
    const word1 = "ab"
    const word2 = "pqrs"

    const result = "apbqrs";

    const test = mergeAlternately(word1, word2);

    expect(result).toBe(test);
  });
  it('third test', () => {
    const word1 = "abcd"
    const word2 = "pq"

    const result = "apbqcd";

    const test = mergeAlternately(word1, word2);

    expect(result).toBe(test);
  });

 });