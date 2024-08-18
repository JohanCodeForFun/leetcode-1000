function numberOfPairs(nums: number[]): number[] {
  let pairCount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        pairCount++;
        i++;
        j = 1;
        nums.shift();
      }

    }
  }

  return [pairCount, nums.length];
};