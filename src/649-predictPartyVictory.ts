/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Thank you Santosh Setty for getting my to the solution!
  Link, https://leetcode.com/problems/dota2-senate/discuss/3483505/Step-by-Step-Guide%3A-JavaScript-Code-with-Comments-and-Detailed-Explanation
*/

export function predictPartyVictory(senate: string): string {
  const dire = [];
  const radiant = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] === "D") {
      dire.push(i + n);
    } else {
      radiant.push(i + n);
    }
  }

  while (dire.length > 0 && radiant.length > 0) {
    if (dire[0] > radiant[0]) {
      radiant.push(radiant[0] + n)
    } else {
      dire.push(dire[0] + n)
    }

    dire.shift();
    radiant.shift();
  }

  return (radiant.length > 0) ? "Radiant" : "Dire";
}
