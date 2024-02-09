/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, Math
*/

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  // return hours.filter((hour)=>hour>=target).length;

  let targetCount = 0;

  for (let hour of hours) {
    if (hour >= target) targetCount++;
  }

  return targetCount;
};