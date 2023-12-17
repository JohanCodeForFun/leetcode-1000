/* 
Constraints:
  2 <= nums.length <= 105
  -30 <= nums[i] <= 30
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

  Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

import { productExceptSelf } from "../src/234-productExceptSelf";

describe("test product except self, 234", () => {
  it("first test", () => {
    const nums = [1, 2, 3, 4];
    const test = productExceptSelf(nums);

    const result = [24, 12, 8, 6];

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [-1, 1, 0, -3, 3];
    const test = productExceptSelf(nums);

    const result = [0, 0, 9, 0, 0];

    expect(test).toEqual(result);
  });
});
