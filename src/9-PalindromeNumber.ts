/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String
*/

function isPalindrome(x: number): boolean {
  return String(x) === String(x).split('').reverse().join('')
};