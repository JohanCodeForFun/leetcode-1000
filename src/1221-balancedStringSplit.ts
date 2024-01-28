/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: String
*/

function balancedStringSplit(s: string): number {
  let balanceCount = 0;
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      balanceCount++;
    } else {
      balanceCount--;
    }
    if (balanceCount === 0) {
      ans++;
    }
  }
  return ans;
}
