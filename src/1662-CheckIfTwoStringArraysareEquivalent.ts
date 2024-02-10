/*
  Time Complexity: O(n + m)
  Space Complexity: O(n + m)

  Difficulty: Easy
  Tags, String
*/

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join('') === word2.join('') ? true : false;
};