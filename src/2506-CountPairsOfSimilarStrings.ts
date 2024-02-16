/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, set
*/

function similarPairs(words: string[]): number {
  let pairCount = 0;

  for (let i = 0; i < words.length; i++) {
    const curr = new Set(words[i]);
    const next = new Set(words[i + 1]);

    if (curr.size === next.size) {
      pairCount++;
    }
  }

  return pairCount;
};
