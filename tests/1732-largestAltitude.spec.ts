/* 
  There is a biker going on a road trip. The road trip 
  consists of n + 1 points at different altitudes. 
  The biker starts his trip on point 0 with altitude equal 0.
  
  You are given an integer array gain of length n where gain[i] 
  is the net gain in altitude between points i​​​​​​ and i + 1 for 
  all (0 <= i < n). Return the highest altitude of a point.

Constraints:
  n == gain.length
  1 <= n <= 100
  -100 <= gain[i] <= 100
*/

import { largestAltitude } from "../src/1732-largestAltitude";

describe("1732: Largest Altitude", () => {
  it("first test", () => {
    const gain = [-5,1,5,0,-7]
    const test =  largestAltitude(gain);

    const result = 1;

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const gain = [-4,-3,-2,-1,4,3,2]
    const test =  largestAltitude(gain);

    const result = 0;

    expect(test).toEqual(result);
  });

});
