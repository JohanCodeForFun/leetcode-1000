function isRowEqualToColumn(grid: number[][], rowIndex: number, colIndex: number): boolean {
  for (let i = 0; i < grid.length; i++) {
    if (grid[rowIndex][i] === grid[i][colIndex]) {
      return true
    }
  }
  return false
}

export function equalPairs(grid: number[][]): number {
  const horizontal: { [key: string]: number[] } = {};
  const vertical: { [key: string]: number[] } = {};

  let count = 0;
  let temp;

  for (let i = 0; i < grid.length; i++) {
    horizontal[i] = grid[i]
    for (let j = 0; j < grid[i].length; j++) {
      if (!vertical[`col${j}`]) {
        vertical[`col${j}`] = [];
      }
      vertical[`col${j}`].push(grid[i][j]);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isRowEqualToColumn(grid, i ,j)) {
        count++
      }
    }
  }


  return count;
}
