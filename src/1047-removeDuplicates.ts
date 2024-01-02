/*
  Time Complexity: O(n).
  Time Complexity: O(n).

  Tags: stack, string, array
  Difficulty, Easy

  Thank you Vinay Pratap Singh for help with
  how to use topOfStack to compare next value.

  Link, https://leetcode.com/itsharvihere/
*/

export function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const topOfStack = stack[stack.length - 1] || "";

    if (topOfStack === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
