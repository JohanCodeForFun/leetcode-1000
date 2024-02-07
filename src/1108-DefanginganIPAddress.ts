/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String
*/

function defangIPaddr(address: string): string {
  let result = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      result += "[.]"
    } else {
      result += address[i];
    }
  }
  return result;
};