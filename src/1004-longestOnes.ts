export function longestOnes(nums: number[], k: number): number {
  let windowSum = 0;
  let maxSum = 0;
  let count = 0;

  console.log(nums)

  // nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
  // result = 6;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  console.log(maxSum)

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    if(nums[i] === 0 && k > 0) {
      k--;
      continue;
    } else {
      nums[i] = 1
      count++;
    }
  }
  console.log(nums)



  return count
  };