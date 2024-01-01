/*
  Time Complexity: O(n * m)
  Space Complexity: O(n * m)

  Thank you Staz for this solution!
  Link, https://leetcode.com/stazcp/

  Thank you github copilot for suggestions!
*/

export function equalPairs(grid: number[][]): number {
  const rows = new Map();
  const cols = new Map();

  for (let i = 0; i < grid.length; i++) {
    const row = [],
      col = [];

    for (let j = 0; j < grid[0].length; ++j) {
      console.log("for [i][j]:", grid[i][j])
      console.log("for [j][i]:", grid[j][i])
      row.push(grid[i][j]);
      col.push(grid[j][i].toString());
    }

    const strRow = row.toString();
    const strCol = col.toString();

    rows.set(strRow, (rows.get(strRow) ?? 0) + 1);
    cols.set(strCol, (cols.get(strCol) ?? 0) + 1);
  }

  let ans = 0;

  for (const [row, value] of rows) {
    if (cols.has(row)) {
      ans += cols.get(row) * value;
    }
  }

  return ans;
}
