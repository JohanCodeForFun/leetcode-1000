export function findSpecialInteger(arr: number[]): number {
  let result = 0;
  let temp = 0;

  const countOccurrences = (arr: number[]) =>
    arr.reduce(
      (prev: { [key: number]: number }, curr) => (
        (prev[curr] = ++prev[curr] || 1), prev
      ),
      {}
    );

  const collectionOfOccurrences = countOccurrences(arr);

  Object.entries(collectionOfOccurrences).forEach(([key, value]) => {
    if (value > temp) {
      result = parseInt(key);
      temp = value;
    }
  });

  return result;
}
