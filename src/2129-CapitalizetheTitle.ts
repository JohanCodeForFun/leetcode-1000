/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String
*/

function capitalizeTitle(title: string): string {
  title = title.toLowerCase();

  const words = title.split(' ').map(word => {
    if (word.length < 2) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  })

  return words.join(' ');
};
