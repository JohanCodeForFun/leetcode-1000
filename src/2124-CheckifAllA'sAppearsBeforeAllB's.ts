/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Diffculty: Easy
  Tags: Array, string
*/

function checkString(s: string): boolean {
  let foundB = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b') {
      foundB = true;

    } else if (foundB && s[i] === 'a') {
      return false;
    }
  }

  return true;
};