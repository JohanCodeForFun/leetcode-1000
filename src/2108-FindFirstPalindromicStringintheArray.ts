/*
  Time Complexity: O(n)
  Space Complexity:O(1)

  Difficulty: Easy
  Tags: String, two pointer
*/

function firstPalindrome(words: string[]): string {
  for (const word of words) {
    let n = word.length
    let left = 0;
    let right = n - 1;

    while (left < right) {

      if (word[left] !== word[right]) {
        break;
      };

      left++;
      right--;
    };

    if (left >= right) {
      return word;
    };
  };

  return "";
};