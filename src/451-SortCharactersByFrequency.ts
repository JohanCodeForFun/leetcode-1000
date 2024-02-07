/*
  Time Complexity: O(nlogn)
  Space Complexity: O(n)

  Difficulty: Medium
  Tags: Hash Table, Sort
*/

function frequencySort(s: string): string {
  const hash: { [key: string]: number } = {}
  const result: string[] = []

  s.split('').forEach(function (i) {
    hash[i] = (hash[i] || 0) + 1
  })

  const entries = Object.entries(hash);
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

  sortedEntries.forEach(([char, occurence]) => {

    while (occurence > 0) {
      result.push(char)
      occurence--;
    }
  })

  return result.join('')
};

// DONE store the frequency of each character in a hash table
// sort the hash table by frequency
// return the sorted string

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.