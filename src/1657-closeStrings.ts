/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Thank you alihaideralsawad for this solution!
  Link, https://leetcode.com/alihaideralsawad/

  Thank you github copilot for this improved solution!
*/

export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const w1c = new Array(26).fill(0);
  const w2c = new Array(26).fill(0);

  for (const c of word1) w1c[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  for (const c of word2) w2c[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

  if (!w1c.every((val, i) => (val !== 0) === (w2c[i] !== 0))) return false;

  const freq1 = new Array(word1.length + 1).fill(0);
  const freq2 = new Array(word2.length + 1).fill(0);

  for (const c of w1c) freq1[c]++;
  for (const c of w2c) freq2[c]++;

  return freq1.every((val, i) => val === freq2[i]);
};