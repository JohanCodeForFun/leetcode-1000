/*
  Input: timeSeries = [1,4], duration = 2
  Output: 4
  Explanation: Teemo's attacks on Ashe go as follows:
  - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
  - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
  Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

  Example 2:
  Input: timeSeries = [1,2], duration = 2
  */

export function findPoisonedDuration(
  timeSeries: number[],
  duration: number
): number {

  let durationCount = 0;
  let n = timeSeries.length;

  for (let i = 0; i < n; i++) {
    // if 1, 2 are in duration, restart counter from 2.
    // duration 2 seconds. 1 + 2 === timeseries[i] + duration 
    if (timeSeries[i] + timeSeries[i + 1] === timeSeries[i] + duration) {
      durationCount += 1;
    } else {
      durationCount += 1 * duration;
    }
  }

  return durationCount;
}
