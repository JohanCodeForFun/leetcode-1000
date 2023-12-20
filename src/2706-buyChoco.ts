export function buyChoco(prices: number[], money: number): number {
  let min1 = prices[0]
  let min2 = Infinity;
  
  for (let i = 1, n = prices.length; i < n; i++) {
    if (prices[i] < min1) {
      min2 = min1;
      min1 = prices[i];
    } else if (prices[i] < min2) {
      min2 = prices[i];
    }
  }
  min1 += min2;

  return min1 <= money ? money - min1 : money;
}
