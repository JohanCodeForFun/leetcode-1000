/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: String

  Thank you Illia for the idea of using chars instead of my previous solution!
  It made me think of using a dictionary to store the values of each char.
  Link, https://leetcode.com/problems/split-a-string-in-balanced-strings/discuss/4090574/Beginner-friendly-oror-Simple-solution-in-Python3TypeScript
*/

function balancedStringSplit(s: string): number {
  const chars: { [key: string]: number } = { L: -1, R: 1 };
  let cur = 0;
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    cur += chars[s[i]];
    if (cur === 0) {
      ans++;
    }
  }

  return ans;
}
