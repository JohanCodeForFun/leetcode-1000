/*
  Time Complexity:
  Space Complexity:

  Difficulty: Medium
  Tags: String, hash map, daily
*/

function customSortString(order: string, s: string): string {
  let sMap = new Map<string, number>();
  let orderMap = new Map<string, number>();

  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1)
  }
  for (const char of order) {
    orderMap.set(char, (orderMap.get(char) || 0) + 1);
  }

  let orderArr = order.split('')
  let sArr = s.split('')
  let result = '';
  let i = 0

  console.log(orderArr, sArr)

  while (orderArr.length > 0) {
    if (orderMap.has(s[i])) {
      result += order[i]
      orderArr.shift();
      sArr.shift()
      i++;
    } else {
      result += order[i];
      sArr.shift();
      i++;
    }
  }

  for (i = result.length; i < s.length; i++) {
    result += s[i]
  }

  return result;
};