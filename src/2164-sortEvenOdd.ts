/*
  Time Complexity: O(n log n)
  Space Complexity: O(n)
*/

export function sortEvenOdd(nums: number[]): number[] {
  const oddNumbers: number[] = [];
  const evenNumbers: number[] = [];
  const sortedNumbers: number[] = [];

  // iterate through nums
  // push numbers at even and odd indices
  nums.forEach((value, index) => {
    if (index % 2 === 0) {
      evenNumbers.push(value);
    } else {
      oddNumbers.push(value);
    }
  });

  // sort even index nums in ascending order
  if (evenNumbers.length > 0) evenNumbers.sort((a, b) => b - a);
  // sort odd index nums in descending order
  if (oddNumbers.length > 0) oddNumbers.sort((a, b) => a - b);

  // merge results
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      if (evenNumbers.length > 0) sortedNumbers[i] = evenNumbers.pop()!;
    } else {
      if (oddNumbers.length > 0) sortedNumbers[i] = oddNumbers.pop()!;
    }
  }

  return sortedNumbers;
}
