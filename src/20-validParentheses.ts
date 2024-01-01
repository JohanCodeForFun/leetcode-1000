/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/

export function isValid(s: string): boolean {
  let matchString = "";

  for (let i = 0; i < s.length; i++) {
    let temp;
    
    if (s[i + 1] === "(" || s[i + 1] === "[" || s[i + 1] === "{") {
      temp = s[i];
    } else {
      switch (s[i]) {
        case "(":
          matchString += "()";
          break;
        case "[":
          matchString += "[]";
          break;
        case "{":
          matchString += "{}";
          break;

        default:
          matchString += "";
          break;
      }
    }
    if (temp === "(") matchString += ")";
    if (temp === "[") matchString += "]";
    if (temp === "{") matchString += "}";
  }

  console.log(s, matchString);

  return matchString.trim() === s ? true : false;
}
