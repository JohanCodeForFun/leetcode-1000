/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Tags: two-pointer, greedy
*/

export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let count = 0;
  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      count++;
      i++;
    }
    j++;
  }

  return count;
}
