export function compress(chars: string[]): string[] {
  // chars = ["a","a","b","b","c","c","c"]
  // result = ["a","2","b","2","c","3"]

  // chars = ["a"]
  // result = ["a"]

  // chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
  // result = ["a","b","1","2"]

  // For clarification, you need change the chars array,
  // then return the length of the "new" char[].
  // The testcase will then look at the first x elements of
  // the chars array, where x denotes the return value.

  const result: string[] = [];
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    let currentChar = chars[i];
    let prevChar = chars[i - 1];
    let nextChar = chars[i + 1];

    if (currentChar === prevChar) {
      count++;
    } else {
      count = 1;
    }

    if (currentChar !== nextChar) {
      if (count > 10) {
        result.push(currentChar);
        let bigCount = count.toString().split("");
        result.push(bigCount[0], bigCount[1]);
      } else if (count > 1) {
        result.push(currentChar);
        result.push(count.toString());
      } else {
        result.push(currentChar);
      }
    }
  }

  return result;
}
