/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array
*/

function areNumbersAscending(s: string): boolean {
  let matches = s.match(/\d+/g)
  let numbers = matches ? matches.map(Number) : [];

  for (let i = numbers.length - 1; i > 0; i--) {
    if (numbers[i] <= numbers[i - 1]) {
      return false
    }
  }
  return true
};