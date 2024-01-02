/* 
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty, Medium
  Tags: stack, string, array
*/

export function removeStars(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
