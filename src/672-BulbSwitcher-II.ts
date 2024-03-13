/*
  Time Complexity: O(1)
  Space Complexity: O(1)

  Difficulty: Medium
  Tags: Math
*/

function flipLights(n: number, presses: number): number {
  if (presses === 0) return 1;
  else if (n === 1) return 2;

  else if (n === 2) {
    return presses === 1 ? 3 : 4;
  } else {
    return presses === 1 ? 4 :
      presses === 2 ? 7 : 8;
  }
};