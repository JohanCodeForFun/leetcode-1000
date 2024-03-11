/*
  Time Complexity: O(n + m)
  Space Complexity: O(m)

  Difficulty: Medium
  Tags: String, hash map, daily

  Thank you Deepak Negi for helping me simplify the algorithm!
  Link, https://leetcode.com/problems/custom-sort-string/discuss/4856371/100-Beats-or-or-Hash-Table-or-or-Easy-Explanation-or-or-C%2B%2B-or-or-Java-or-or-Python-or-or
*/

function customSortString(order: string, s: string): string {
  let map = new Map<string, number>();
  let result = '';

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of order) {
    if (map.has(char)) {
      result += char.repeat(map.get(char) || 0);
      map.delete(char);
    }
  }

  for (const [char, count] of map.entries()) {
    result += char.repeat(count || 0)
  }

  return result;
};
