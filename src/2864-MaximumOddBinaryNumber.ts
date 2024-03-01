/*
  Time Complexity: O(n)
  Space Comeplxity: O(n)

  Difficulty: Easy
  Tags: Array, string, binary, number
*/

function maximumOddBinaryNumber(s: string): string {
  let result = [];
  let first = true;
  let temp = "";

  for (const num of s) {
    if (num === "1" && first) {
      temp = num;
      first = false;
    } else if (num === "0") {
      result.push(num)
    } else {
      result.unshift(num)
    }
  }

  result.push(temp)

  return result.join("");
};