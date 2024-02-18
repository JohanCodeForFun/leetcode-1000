/*
  Time Complexity: O(n log n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: Array, sort
*/

function sortPeople(names: string[], heights: number[]): string[] {
  const peoples = names.map((name, index) => {
    return {
      name,
      height: heights[index]
    }
  })

  peoples.sort((a, b) => b.height - a.height);

  const sortedPeople = peoples.map(person => person.name)

  return sortedPeople;
};