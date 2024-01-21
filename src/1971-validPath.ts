/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Medium.
  Tags: Graph, DFS.

  Thank you Eddy Hernandez for this solution!
  Link, https://leetcode.com/problems/find-if-path-exists-in-graph/discuss/1737740/JavaScript-TypeScript-Solution
*/

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if (source === destination) return true;
  
  const uf: { [vertice: number]: Set<number> } = {};
  for (const [u, v] of edges) {
      if (uf[u] == undefined) uf[u] = new Set<number>();
      if (uf[v] == undefined) uf[v] = new Set<number>();
      
      uf[u].add(v);
      uf[v].add(u);
  }
             
  const visited = new Set<number>();
            
  const dfs = (x: number, target: number): boolean => {
      if (visited.has(x) || !(x in uf)) return false
      visited.add(x);
      
      const neighbours = uf[x];
      if (neighbours.has(target)) return true
      return Array.from(neighbours).some((neighbour) => dfs(neighbour, target))
  }
  
  return dfs(source, destination)
};