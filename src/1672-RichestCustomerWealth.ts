/*
  Time Complexity: O(n*m)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Math
*/

function maximumWealth(accounts: number[][]): number {
  // one-line solution
  // return Math.max(...accounts.map(customer => customer.reduce((a, b) => a + b, 0)));
  
  let ans = -1;

  for (let customer of accounts) {
    let customerBalance = 0;

    for (let value of customer) {
      customerBalance += value
    }

    ans = Math.max(ans, customerBalance)
  }

  return ans
};