/*
Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104
*/

function findErrorNums(nums: number[]): number[] {
  let list = new Map();
  let errorValue;
  const result = [];

  for (let num of nums) {
    if (list.has(num)) {
      list.set(num, list.get(num) + 1);
    } else {
      list.set(num, 1);
    }
  }

  for (let [key, value] of list) {
    if (value > 1) errorValue = value;
  }

  let indexOfErrorValue = nums.indexOf(errorValue);

  console.log("Error value:", errorValue, indexOfErrorValue);

  for (let i = indexOfErrorValue; i < nums.length; i++) {
    console.log(i, nums[i]);
    result.push(nums[i]);
    if (result[i] === nums[i - 1]) result[i] += 1;
  }

  return result;
}
