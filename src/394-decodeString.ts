/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty, Medium
  Tags: stack, array, string
*/
export function decodeString(s: string): string {
  let stack = [];
  let multiplier = 0;
  let result = "";

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      multiplier = multiplier * 10 + Number(char);
    } else if (char === "[") {
      stack.push(multiplier);
      stack.push(result);

      multiplier = 0;
      result = "";
    } else if (char === "]") {
      let prevResult = stack.pop();
      let prevMultiplier = stack.pop();

      if (typeof prevMultiplier !== 'number') {
        throw new Error('Expected a number');
      }

      result = prevResult + result.repeat(prevMultiplier);
    } else {
      result += char;
    }
  }
  return result;
}
