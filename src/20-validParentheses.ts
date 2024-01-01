/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();

      if (last === undefined || map[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
