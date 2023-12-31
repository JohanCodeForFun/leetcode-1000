/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

export function maxLengthBetweenEqualCharacters(s: string): number {
  const map: { [key: string]: number } = {};
  let ans = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      ans = Math.max(ans, i - map[s[i]] - 1);
    } else {
      map[s[i]] = i;
    }
  }

  return ans;
}
