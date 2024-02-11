/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String
*/

function truncateSentence(s: string, k: number): string {
  // return s.split(' ').slice(0, k).join(' ');

  let count = 0;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      count++;

      if (count === k) {
        break;
      }
    }
    result += s[i];
  }

  return result;
};