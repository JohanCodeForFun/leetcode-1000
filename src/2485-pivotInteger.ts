/*
  Time Complexity: O(n^3)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Number, sum
*/

function pivotInteger(n: number): number {
  for (let i = 1; i <= n; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j <= i; j++) {
      sumLeft += j;
    }

    for (let k = i; k <= n; k++) {
      sumRight += k;
    }

    if (sumLeft === sumRight) {
      return i
    }
  }

  return -1;
};
