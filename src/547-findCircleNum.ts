/*
  547. Number of Provinces

  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty, Medium
  Tags, Graph, DFS

  Thank you AlgoJs for this solution!
  Link, https://www.youtube.com/watch?v=LMxTM4QaCgM
*/

function findCircleNum(isConnected: number[][]): number {
  let adjList: { [key: number]: number[] } = {};

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      let val = isConnected[i][j];

      if (val === 1) {
        if (!adjList[i]) {
          adjList[i] = [j];
        } else {
          adjList[i].push(j);
        }
      }
    }
  }

  let visited = new Set();
  let provinces = 0;

  for (let key in adjList) {
    let keyNum = parseInt(key);
    provinces += dfs(keyNum);
  }

  function dfs(node: number) {
    if (visited.has(node)) {
      return 0;
    }

    visited.add(node);

    let neighbors = adjList[node];

    for (let neighbor of neighbors) {
      dfs(neighbor);
    }

    return 1;
  }

  return provinces;
}

// let directProvince = 0;
// let indirectProvince = 0;
// let outerCount = 0;
// let innerCount = 0;

// for (let i = 0; i < isConnected.length; i++) {
//   for (let j = 0; j < isConnected[i].length; j++) {
//     if (isConnected[i][j] === 1 && isConnected[i][j + 1] === 1) {
//       directProvince++;
//     }
//     if (isConnected[i][j] === 1 && isConnected[i][j + 1] === 0) {
//       indirectProvince++;
//     }
//   }
// }
// return indirectProvince;
