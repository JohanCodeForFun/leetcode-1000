/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String, charcode
*/

const shift = (char: string, num: number) => {
  return String.fromCharCode(char.charCodeAt(0) + num);
}

function replaceDigits(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) === 0) {
      result += s[i - 1];
    } else if (!isNaN(parseInt(s[i]))) {
      result += shift(s[i - 1], parseInt(s[i]))
    } else {
      result += s[i];
    }
  }

  return result
};