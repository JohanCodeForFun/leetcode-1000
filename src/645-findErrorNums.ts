/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Diffculty, Easy
  Tags: hash map, array. numbers
*/
function findErrorNums(nums: number[]): number[] {
  let list = new Map();
  let duplicate = -1;
  let missing = -1;

  for (let num of nums) {
    if (list.has(num)) {
      duplicate = num;
    }
    list.set(num, true);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!list.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}
