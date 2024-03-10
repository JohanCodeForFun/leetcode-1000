/*
  Time Complexity: O(n + m)
  Space Complexity: O(n + m)

  Difficulty: Easy
  Tags: Array, map
*/

function countWords(words1: string[], words2: string[]): number {
  let map1 = new Map<string, number>();
  let map2 = new Map<string, number>();

  for (const word of words1) {
    map1.set(word, (map1.get(word) || 0) + 1);
  }

  for (const word of words2) {
    map2.set(word, (map2.get(word) || 0) + 1);
  }

  let count = 0;

  for (const word of words1) {
    if (map1.get(word) === 1 && map2.get(word) === 1) count++;
  }

  return count;
};