/*
  Time Complexity: O(n log n)
  Space Complexity: O(n)

  Difficulty: Medium
  Tags: Array, numbers, string, sort
*/

function reorderLogFiles(logs: string[]): string[] {
  let result: string[] = [];
  const letterLogs = [];
  const digitLogs = [];

  for (let i = 0; i < logs.length; i++) {
    let log = logs[i].split(' ');

    if (isNaN(Number(log[1]))) {
      letterLogs.push(logs[i])
    } else {
      digitLogs.push(logs[i])
    }
  }

  letterLogs.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1);
    const bBody = b.slice(b.indexOf(' ') + 1);
    const c = aBody.localeCompare(bBody);
    if (c !== 0) return c;
    return a.localeCompare(b);
  });

  result = [...letterLogs, ...digitLogs]

  return result
};