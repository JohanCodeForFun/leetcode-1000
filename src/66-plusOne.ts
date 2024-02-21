/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array numbers
*/

function plusOne(digits: number[]): number[] {
  const result: number[] = []
  let parsedDigits: (string | number) = digits.join('')
  parsedDigits = parseInt(parsedDigits) + 1
  parsedDigits = parsedDigits.toString()

  for (let num of parsedDigits) {
    result.push(parseInt(num))
  }

  return result
};
