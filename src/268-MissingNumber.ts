/*
  Time Complexity: O(n log n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, daily
*/

function missingNumber(nums: number[]): number {
  let sortedNums = nums.sort((a, b) => a - b)
  let missingNum = 0;

  if (sortedNums[0] !== 0) {
    return missingNum;
  }

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums.length === 1 && sortedNums[i] > 0) {
      missingNum = sortedNums[i] - 1;
      break;
    }


    if (sortedNums[i] + 1 !== sortedNums[i + 1]) {
      missingNum = sortedNums[i] + 1;
      break;
    }

    if (i === sortedNums.length) {
      missingNum = sortedNums[i] + 1;
    }
  }

  return missingNum;
};
