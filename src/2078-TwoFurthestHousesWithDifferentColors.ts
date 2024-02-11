/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Array, two pointer
*/

function maxDistance(colors: number[]): number {
  const n = colors.length
  let left = 0
  let right = n - 1
  let ans = -1;

  while (left < right) {
    if (colors[left] !== colors[right]) {
      ans = Math.max(ans, right - left)
    }
    right--
  }

  left = 0
  right = n - 1

  while (left < right) {
    if (colors[left] !== colors[right]) {
      ans = Math.max(ans, right - left)
    }
    left++
  }

  return ans
};