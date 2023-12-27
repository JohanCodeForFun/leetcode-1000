// Thank you Oleg for this solution.
// link, https://leetcode.com/badnewz/
/*
  Time Complexity: O(n).
  Space Complexity: O(1).
*/

export function minCost(colors: string, neededTime: number[]): number {
  const n = colors.length;
  if (n === 1) return 0;

  let time = 0, left = 0, right = 0;

  while (++right < n) {
    if (colors[left] === colors[right]) {
      if (neededTime[left] < neededTime[right]) {
        time += neededTime[left];
        left = right;
      } else time += neededTime[right];
    } else left = right
  }
  return time;
}
