/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, String, Number
*/

function maximum69Number(num: number): number {
  let nums = num.toString().split("");
  let result: number[] = [];
  let changes = 1;

  nums.forEach((value) => {
    if (value !== "9" && changes > 0) {
      result.push(9);
      changes--;
    } else {
      result.push(Number(value));
    }
  });

  return Number(result.join(""));

  // oneline from Vinicius Teixeira Dias
  // return +num.toString().replace('6', '9')
}
