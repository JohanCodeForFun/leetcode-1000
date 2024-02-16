/*
  Time Complexity: O(nmlog(m))
  Space Complexity: O(n*m)

  Difficulty: Easy
  Tags: Array, set

  Thank you Elango Ramar for this solution!
  Link, https://leetcode.com/problems/count-pairs-of-similar-strings/discuss/4414640/Simple-3-liner-solution-that-beats-78-of-runtime
*/

function similarPairs(words: string[]): number {
  const frequency = new Map<string, number>();
  const sortedWords = words.map((word) => {
    return [... new Set(word)].sort().join()
  })

  return sortedWords.reduce((count, word) => {
    const f = frequency.get(word) || 0;
    count += f;
    frequency.set(word, f + 1)

    return count;
  }, 0)
};
