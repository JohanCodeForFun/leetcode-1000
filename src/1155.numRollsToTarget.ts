/*
  Complexity Analysis
    Time complexity: O(d * f * target)
    Space complexity: O(d * target)

    Help from github copilot.
*/

export function numRollsToTarget(n: number, f: number, target: number): number {
  const MOD = 10**9 + 7;
  const dp = Array(n + 1).fill(0).map(() => Array(target + 1).fill(0));
  dp[0][0] = 1;  // number of ways to roll 0 dice to get sum 0 is 1

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      for (let k = 1; k <= f; k++) {
        if (j >= k) dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
      }
    }
  }

  return dp[n][target];
}