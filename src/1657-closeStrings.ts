/*
  Time Complexity: O(n log n)
  Space Complexity: O(1)

  Thank you alihaideralsawad for this solution!
  Link, https://leetcode.com/alihaideralsawad/
*/

export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const w1c = new Array(26).fill(0);
  const w2c = new Array(26).fill(0);

  for (const c of word1) w1c[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  for (const c of word2) w2c[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

  if (!w1c.every((val, i) => (val !== 0) === (w2c[i] !== 0)))

  w1c.sort();
  w2c.sort();

  return w1c.every((val, i) => val === w2c[i])
};