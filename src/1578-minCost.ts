export function minCost(colors: string, neededTime: number[]): number {
  // Input: colors = "abaac",
  // neededTime = [1,2,3,4,5]
  // Output: 3

  let left = 0;
  let totalSum = "";
  let currentSum = "";

  for (let i = 0; i < colors.length; i++) {
    currentSum += colors[i];

    if (
      colors[i] === currentSum[i - 1] &&
      colors[colors.length - 1 - i] === colors[colors.length - 2 - i]
    ) {
      return neededTime[neededTime.length - i - 1] + neededTime[neededTime.length - 1 - i];

    } else if (colors[i] === currentSum[i - 1]) {
      console.log("if,", i, colors[i], currentSum, currentSum[i - 1]);
      return neededTime[i - 1];
    }
  }

  return 0;
}
