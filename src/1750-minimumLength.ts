/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Medium
  Tags: String, two pointer, daily
*/

function minimumLength(s: string): number {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    let tmp = s[left];

    while (left <= right && s[left] === tmp) left++;
    while (right > left && s[right] === tmp) right--;
  }

  return right - left + 1;
};