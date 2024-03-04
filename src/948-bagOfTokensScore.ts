/*
  Time Complexity: O(n log n)
  Space Complexity: O(1)

  Difficulty: Medium
  Tags: Array, numbers, two pointer, daily
*/

function bagOfTokensScore(tokens: number[], power: number): number {
  let low = 0;
  let high = tokens.length - 1;
  let score = 0;

  tokens = tokens.sort((a, b) => a - b);

  while (low <= high) {
    if (power >= tokens[low]) {
      score++;
      power -= tokens[low];
      low++;

    } else if (score > 0 && low < high) {
      score--;
      power += tokens[high];
      high--;
    } else {
      break;
    }
  }

  return score
};