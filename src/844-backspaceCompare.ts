/*
  Time Complexity: O(n).
  Space Complexity: O(1).

  Difficulty, Easy.
  Tags: two pointer, string, array
*/

export function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    let backspaceCount;

    backspaceCount = 0;
    while (s[i] === "#" || backspaceCount > 0) {
      if (s[i] === "#") backspaceCount++;
      else backspaceCount--;
      i--;
    }

    backspaceCount = 0;
    while (t[j] === "#" || backspaceCount > 0) {
      if (t[j] === "#") backspaceCount++;
      else backspaceCount--;
      j--;
    }

    if (s[i] !== t[j]) return false;

    i--;
    j--;
  }
  
  return true;
}
