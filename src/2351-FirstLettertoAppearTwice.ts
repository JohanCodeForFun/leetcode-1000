/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Strings, Maps
*/

function repeatedCharacter(s: string): string {
  let hash = new Map<string, number>();

  for (let char of s) {
    if (hash.has(char)) {
      return char;
    } else {
      hash.set(char, 1);
    }
  }
  return '';
}
