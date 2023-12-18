// Input: nums = [0]
// Output: [0]

/**
 Do not return anything, modify nums in-place instead.
 */

/*
  x Consider having two pointers at the start of the array. 
  - Iterate through the array and swap between the pointers 
  - only when right pointer is non-zero, only after the swap, 
  - increment your left pointer (along with the right pointer). 
  - Otherwise, only increment your right pointer.
 */

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

export function moveZeroes(nums: number[]): void {
  let counter = 0;
  let temp;

  let pointer1 = 0;
  let pointer2 = nums.length - 1;

  while (counter < nums.length) {
    if (nums[pointer2] !== 0) {
      temp = nums[pointer1]
      nums[pointer1] = nums[pointer2];
      nums[pointer2] = temp;

      pointer1++;
      pointer2--;
    }
    pointer2--;

    console.log("nums:", nums[pointer1], nums[pointer2]);
    counter++;
  }
  console.log(nums);
}
