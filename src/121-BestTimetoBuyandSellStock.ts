/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags, Array
*/

function maxProfit(prices: number[]): number {
  if (prices.length < 0) return 0;

  let min = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    min = Math.min(min, price)
    maxProfit = Math.max(maxProfit, price - min)
  }

  return maxProfit;
};