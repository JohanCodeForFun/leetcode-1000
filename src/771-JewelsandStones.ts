/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags, Array, set
*/

function numJewelsInStones(jewels: string, stones: string): number {
  let set = new Set(jewels)
  let jewelsCount = 0;

  for (let stone of stones) {
    if (set.has(stone)) jewelsCount++;
  }

  return jewelsCount;
}