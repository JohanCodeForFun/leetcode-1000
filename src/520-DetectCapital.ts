/*
  Time Complexity: O(1)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: String
*/

function detectCapitalUse(word: string): boolean {
  const isAllCaps = /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]*$/.test(word);
  return isAllCaps;
};
