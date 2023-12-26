/* 
You have n dice, and each die has k faces numbered from 1 to k.

Given three integers n, k, and target, return the number of 
possible ways (out of the kn total ways) to roll the dice, 
so the sum of the face-up numbers equals target. Since 
the answer may be too large, return it modulo 109 + 7.

Constraints:
  1 <= n, k <= 30
  1 <= target <= 1000
*/

import { numRollsToTarget } from "../src/1155.numRollsToTarget";

describe("1155: num rolls to target", () => {
  it("first test", () => {
    const n = 1, k = 6, target = 3
    const test =  numRollsToTarget(n, k, target);

    const result = 1;

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const n = 2, k = 6, target = 7
    const test =  numRollsToTarget(n, k, target);

    const result = 6;

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const n = 30, k = 30, target = 500
    const test =  numRollsToTarget(n, k, target);

    const result = 222616187;

    expect(test).toEqual(result);
  });

});
