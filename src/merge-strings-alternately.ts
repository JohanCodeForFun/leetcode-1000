export const mergeAlternately = (word1: string, word2: string): string => {
  const longestWord = word1.length > word2.length ? word1 : word2;
  let output = "";

  for (let i = 0; i < longestWord.length; i++) {
    if (word1[i] !== undefined) {
      output += word1[i];
    }

    if (word2[i] !== undefined) {
      output += word2[i];
    }
  }

  return output;
};
