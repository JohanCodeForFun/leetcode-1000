/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

export function predictPartyVictory(senate: string): string {
  let queue = senate.split("");
  let radiantCount = 0;
  let direCount = 0;

  while (queue.length > 0) {
    queue[0] === "R" ? radiantCount++ : direCount++;
    queue.shift();
  }

  if (queue.length === 2) {
    return queue[0] === "D" ? "Dire" : "Radiant";
  }

  return radiantCount > direCount ? "Radiant" : "Dire";
}
