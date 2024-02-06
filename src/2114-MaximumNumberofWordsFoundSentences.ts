/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, String
*/

function mostWordsFound(sentences: string[]): number {
  let ans = -1

  for (const sentence of sentences) {
    let splitSentence = sentence.split(' ');

    ans = Math.max(ans, splitSentence.length)
  }

  return ans
};