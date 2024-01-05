/*
  Our hero Teemo is attacking an enemy Ashe with poison attacks! 
  When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration 
  seconds. More formally, an attack at second t will mean Ashe is 
  poisoned during the inclusive time interval [t, t + duration - 1]. 
  If Teemo attacks again before the poison effect ends, the timer 
  for it is reset, and the poison effect will end duration 
  seconds after the new attack.

  You are given a non-decreasing integer array timeSeries, 
  where timeSeries[i] denotes that Teemo attacks Ashe at 
  second timeSeries[i], and an integer duration.

  Return the total number of seconds that Ashe is poisoned.

Constraints:
  1 <= timeSeries.length <= 104
  0 <= timeSeries[i], duration <= 107
  timeSeries is sorted in non-decreasing order.
*/

import { findPoisonedDuration } from "../src/495-findPoisonedDuration";

describe("495: Find Poisoned Duration", () => {
  it("first test", () => {
    const timeSeries = [1,4], duration = 2
    const result =  4;

    const test = findPoisonedDuration(timeSeries, duration);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const timeSeries = [1,2], duration = 2;
    const result = 3;

    const test = findPoisonedDuration(timeSeries, duration);

    expect(test).toEqual(result);
  });

  it("edge case", () => {
    const timeSeries = [1,2,3,4,5], duration = 5;
    const result = 9;

    const test = findPoisonedDuration(timeSeries, duration);

    expect(test).toEqual(result);
  });

});
