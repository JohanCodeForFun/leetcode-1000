/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Number, sum
*/

function pivotInteger(n: number): number {

  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    totalSum += i;
  }
  
  let leftSum = 0;
  for (let i = 0; i <= n; i++) {
    let rightSum = totalSum - leftSum - i;

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += i;
  }

  return -1;
};
