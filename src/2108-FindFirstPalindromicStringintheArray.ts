function firstPalindrome(words: string[]): string {
  for (const word of words) {
    let n = word.length
    let left = 0;
    let right = n - 1;

    if (word.length === 1) {
      return word;
    };

    while (left < right) {

      if (word[left] !== word[right]) {
        break;
      } else {
        left++;
        right--;
      };

      return word;
    };

  };

  return "";
};