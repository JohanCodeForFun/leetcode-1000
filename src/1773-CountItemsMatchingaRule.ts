/*
  Time Complexity: O(n)
  Space Complexity: O(1) with index
  Space Complexity: O(n) with filter

  Difficulty: Easy
  Tags: Array
*/

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let matchedQuery = 0;
  const ruleKeyIndex: { [key: string]: number } = { "type": 0, "color": 1, "name": 2 };

  for (let item of items) {
    if (item[ruleKeyIndex[ruleKey]] === ruleValue) {
      matchedQuery++;
    }
  }

  return matchedQuery

  // using filter
  // const criteriaIndex = ruleKeyIndex[ruleKey];
  // const foundItems = items.filter((item) => item[criteriaIndex] === ruleValue);
  // return foundItems?.length;
};