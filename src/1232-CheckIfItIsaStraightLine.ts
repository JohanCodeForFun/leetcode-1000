/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, math
*/

function checkStraightLine(coordinates: number[][]): boolean {
  let x1 = coordinates[0][0];
  let x2 = coordinates[1][0];
  let y1 = coordinates[0][1];
  let y2 = coordinates[1][1];

  let dx = x2 - x1;
  let dy = y2 - y1;

  for (let i = 2; i < coordinates.length; i++) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];

    if (dy * (x - x2) !== dx * (y - y2)) {
      return false;
    }
  }

  return true;
};