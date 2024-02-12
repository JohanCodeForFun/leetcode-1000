/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Hash map
*/

function majorityElement(nums: number[]): number {
  const hash = new Map();

  for (const num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }

  let majorityElement = nums[0];

  for (const [num, count] of hash.entries()) {
    if (count > hash.get(majorityElement)) {
      majorityElement = num
    }
  }

  return majorityElement;
};