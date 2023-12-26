/*
  Complexity Analysis
    Time complexity: O(N).
    Space complexity: O(1).

  We iterate over every integer in the list gain only once, 
  and hence the total time complexity is equal to O(N).

  We only need two variables, currentAltitude andhighestPoint; 
  hence the space complexity is constant.
*/

export function largestAltitude(gain: number[]): number {
  let altitude = 0;
  let ans = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];

    ans = Math.max(ans, altitude);
  }

  return ans;
}
