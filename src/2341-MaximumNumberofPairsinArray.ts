function numberOfPairs(nums: number[]): number[] {
  let count = 0;
  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      sorted.shift()
      sorted.shift()
      count++;
      i--;
    }
  }

  return [count, sorted.length];
};