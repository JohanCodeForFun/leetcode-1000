/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Diffculty: Easy
  tags: Two Pointers, String
*/

function isLongPressedName(name: string, typed: string): boolean {
  let i = 0;
  let j = 0;

  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      i++;
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false;
    }
    j++;
  }

  return i === name.length;
}
