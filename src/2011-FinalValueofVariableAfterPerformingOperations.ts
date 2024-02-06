/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, String, Math
*/

function finalValueAfterOperations(operations: string[]): number {
  let ans = 0;

  for (let i = 0; i < operations.length; i++) {
    operations[i] === "--X" || operations[i] === "X--" ? ans-- : ans++;
  }

  return ans
};