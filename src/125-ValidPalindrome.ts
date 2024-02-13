/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String, two pointer
*/

function isPalindrome(s: string): boolean {
  const temp = s.split(" ");
  const ans = [];

  for (const word of temp) {
    ans.push(word.toLowerCase().replace(/\W|_/g, ''));
  }

  const newStr = ans.join("")

  const n = newStr.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) break;

    left++;
    right--;
  }

  if (left >= right) {
    return true
  }

  return false;
};