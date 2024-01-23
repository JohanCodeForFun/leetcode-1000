/*
  547. Number of Provinces

  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty, Medium
  Tags, Graph, DFS
*/

function findCircleNum(isConnected: number[][]): number {
  const adjList: Map<number, Set<number>> = new Map();

  isConnected.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) {
        if (!adjList.has(i)) {
          adjList.set(i, new Set([j]));
        }
        adjList.get(i)?.add(j);
      }
    });
  });

  const visited: Set<number> = new Set();
  let provinces = 0;

  adjList.forEach((_, key) => {
    provinces += dfs(key, adjList, visited);
  });

  return provinces;
}

function dfs(
  node: number,
  adjList: Map<number, Set<number>>,
  visited: Set<number>
) {
  if (visited.has(node)) {
    return 0;
  }

  visited.add(node);

  adjList.get(node)?.forEach((neighbor) => {
    dfs(neighbor, adjList, visited);
  });

  return 1;
}
