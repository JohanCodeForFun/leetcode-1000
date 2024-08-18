function numberOfPairs(nums: number[]): number[] {
  const frequency: { [key: number]: number } = {};

  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  let pairs = 0;
  let leftovers = 0;

  for (let key in frequency) {
    const num = parseInt(key);

    pairs += Math.floor(frequency[num] / 2)
    frequency[num] %= 2;
  }

  let sumOddNumbers = 0;
  for (let key in frequency) {
    leftovers += frequency[key]
  }

  return [pairs, leftovers];
};