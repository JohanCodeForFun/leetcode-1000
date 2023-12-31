export function maxLengthBetweenEqualCharacters(s: string): number {
  const map: { [key: string]: number } = {};
  let ans = -1;

  let left = 1;
  let right = s.length;

  while (left < right) {
    if (s[left - 1] !== s[right - 1]) {
      left++;
    }
    if (s[left - 1] === s[right - 1]) {
      ans = Math.max(ans, right - left - 1);
      left++;
    } else {
      right--;
    }
  }

  return ans;
}
