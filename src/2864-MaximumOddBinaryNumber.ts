/*
  Time Complexity: O(n)
  Space Comeplxity: O(n)

  Difficulty: Easy
  Tags: Array, string, binary, number
*/

function maximumOddBinaryNumber(s: string): string {
  let bits = Array.from(s);
  let left = 0;
  let right = bits.length - 1;

  while (left <= right) {
    if (bits[left] === '0' && bits[right] === '1') {
      [bits[left], bits[right]] = [bits[right], bits[left]];
    }
    left += (bits[left] === '1' ? 1 : 0);
    right -= (bits[right] === '0' ? 1 : 0);
  }

  [bits[right], bits[bits.length - 1]] = [bits[bits.length - 1], bits[right]];

  return bits.join('');
};