/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy
  Tags: String Array
*/

function sortSentence(s: string): string {
  const temp = s.split(' ')
  const ans: string[] = [];

  for (let i = 0; i < temp.length; i++) {
    const sortIndex = parseInt(temp[i].slice(-1));
    ans[sortIndex - 1] = temp[i].slice(0, -1);
  }

  return ans.join('')
};