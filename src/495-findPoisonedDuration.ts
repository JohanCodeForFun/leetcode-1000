/*
  Space Complexity: O(n)
  Time Complexity: O(1)

  Difficulty, Easy
  Tags: array, simulation 
*/

export function findPoisonedDuration(
  timeSeries: number[],
  duration: number
): number {
  if (timeSeries.length === 0) return 0;

  let totalDuration = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    totalDuration += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }

  return totalDuration + duration;
}
