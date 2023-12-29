/*
  Time complexity: O(n)
  Space Complexity: O(n)
*/

export function uniqueOccurrences(arr: number[]): boolean {
  const countOccurrences = new Map<number, number>();

  arr.forEach((value) => {
    countOccurrences.set(value, (countOccurrences.get(value) || 0) + 1);
  });

  const UniqueCountOccurrences = new Set(countOccurrences.values());

  return UniqueCountOccurrences.size === countOccurrences.size;
}
