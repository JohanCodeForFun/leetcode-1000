/*
  Time Complexity: O(n log n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Sorting, Math
*/

function minimumSum(num: number): number {
  const nums = num.toString();

  const sortedNumbers = String(num)
    .split("")
    .sort((a, b) => +a - +b);

  let pairA = sortedNumbers[0] + sortedNumbers[2];
  let pairB = sortedNumbers[1] + sortedNumbers[3];

  return Number(pairA) + Number(pairB);
}
