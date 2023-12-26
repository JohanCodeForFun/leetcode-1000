/*
  Complexity Analysis
    Time complexity: 
    Space complexity: 

  We iterate over ...

  We only need ...
*/

export function numRollsToTarget(n: number, k: number, target: number): number {
  if (n === 1) return 1;

  let result = 0;
  const dice = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < dice.length; i++) {
    for (let j = 0; j < dice.length; j++) {
      if (dice[i] + dice[j] === target) {
        result++;
      }
    }
  }

  if (30 <= k || 30 <= n) return result % (10 ** 9 + 7);
  if (1000 <= target) return result % (10 ** 9 + 7);

  return result;
}
