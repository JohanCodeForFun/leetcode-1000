/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String
*/

function capitalizeTitle(title: string): string {
  const stringArray = title.split(' ');
  const result: string[] = [];

  stringArray.forEach(word => {
    if (word.length >= 2) {
      let capitalizeWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result.push(capitalizeWord)
    } else {
      result.push(word.toUpperCase());
    }
  })

  return result.join(' ');
};