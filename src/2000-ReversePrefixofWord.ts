/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Tags: String
  Difficulty: Easy
*/

function reversePrefix(word: string, ch: string): string {
  let chFirstOccurrence = true
  let ans: string[] = [];

  for (const char of word) {
    ans.push(char)
    if (char === ch && chFirstOccurrence) {
      ans = ans.reverse()
      chFirstOccurrence = false
    }
  }

  return ans.join('')
};