/*
  Input: nums = [1,2,3,4,5]
  Output: true
  Explanation: Any triplet where i < j < k is valid.
*/

export const increasingTriplet = (nums: number[]): boolean => {
  let firstNum = Number.MAX_VALUE;
  let secondNum = Number.MAX_VALUE;
  
  for (let num of nums) {
    if (num <= firstNum) {
      firstNum = num;
    } else if (num <= secondNum) {
      secondNum = num;
    } else {
      return true;
    }
  }
  
  return false;
};
