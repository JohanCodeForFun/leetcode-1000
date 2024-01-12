/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty, easy
  Tags, Arrays, Strings, Set, Two Pointer
*/

function halvesAreAlike(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  let leftHalfCount = 0;
  let rightHalfCount = 0;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (left < right) {
    if (vowels.has(s[left])) leftHalfCount++;
    if (vowels.has(s[right])) rightHalfCount++;
    left++;
    right--;
  }

  return leftHalfCount === rightHalfCount;
}
