/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String, hash map
*/

function findTheDifference(s: string, t: string): string {
  let s_map = new Map<string, number>();
  let t_map = new Map<string, number>();

  for (let char of s) {
    s_map.set(char, (s_map.get(char) || 0) + 1);
  }

  for (let char of t) {
    t_map.set(char, (t_map.get(char) || 0) + 1);
  }

  for (let [char, count] of t_map) {
    if (count > (s_map.get(char) || 0)) {
      return char
    }
  }

  return ""
};