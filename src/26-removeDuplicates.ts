/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Diffculty, Easy
  Tags: Array, Two Pointers

  Thank you Arkady for this solution!
  Link, https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/3408328/The-simplest-O(n)-JavaScript-TypeScript-Two-Pointers-solution
*/

function removeDuplicates(nums: number[]): number {
  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
