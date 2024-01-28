/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Square Number, Math
*/

function isPerfectSquare(num: number): boolean {
  if (num < 1) return false;
  if (num === 1) return true;

  for (let i = 1; i <= num / 2; i++) {
    if (i * i === num) {
      return true;
    }
  }

  return false;
}
