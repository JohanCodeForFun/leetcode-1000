/*
  Time Complexity: O(n).
  Space Complexity: O(n).

  Difficulty, Easy.
  Tags: stack, string, array
*/

export function backspaceCompare(s: string, t: string): boolean {
  const stackA = [];
  const stackB = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stackA.pop();
    } else {
      stackA.push(s[i])
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      stackB.pop();
    } else {
      stackB.push(t[i])
    }
  }

  return stackA.join("") === stackB.join("") ? true : false
};