export function largestAltitude(gain: number[]): number {
  let altitude = 0;
  let ans = 0;

  for (let i = 0; i < gain.length; i++) {
    console.log(altitude, gain[i]);
    altitude += gain[i];

    ans = Math.max(ans, altitude);
  }

  return ans;
}
