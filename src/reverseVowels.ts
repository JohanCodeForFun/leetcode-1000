export const reverseVowels = (str: string): string => {

  const vowels: string[] = ["a", "e", "i", "o"];
  let newStr = "";
  let vowelCount = 0;

  const splitStr: string[] = str.split("");
  const vowelsToReverse: string[] = [];

  for (let index in splitStr) {
    if (
      splitStr[index] === "a" ||
      splitStr[index] === "e" ||
      splitStr[index] === "i" ||
      splitStr[index] === "o" ||
      splitStr[index] === "u" ||
      splitStr[index] === "A" ||
      splitStr[index] === "E" ||
      splitStr[index] === "I" ||
      splitStr[index] === "O" ||
      splitStr[index] === "U"
    ) {
      vowelsToReverse.push(splitStr[index]);

      vowelCount++;
    }
  }
  vowelsToReverse.reverse();

  for (let i = 0; i < splitStr.length; i++) {
    if (
      splitStr[i] === "a" ||
      splitStr[i] === "e" ||
      splitStr[i] === "i" ||
      splitStr[i] === "o" ||
      splitStr[i] === "u" ||
      splitStr[i] === "A" ||
      splitStr[i] === "E" ||
      splitStr[i] === "I" ||
      splitStr[i] === "O" ||
      splitStr[i] === "U" 
    ) {
      newStr += vowelsToReverse[0];
      vowelsToReverse.shift();
    } else {
      newStr += splitStr[i];
    }
  }

  return newStr;
};
