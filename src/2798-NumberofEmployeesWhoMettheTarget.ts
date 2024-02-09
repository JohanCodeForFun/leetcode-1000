/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, Math
*/

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  let targetCount = 0;

  for (let hour of hours) {
    if (hour >= target) targetCount++;
  }

  return targetCount;
};