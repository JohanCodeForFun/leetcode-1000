/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Easy.
  Tags: Graph.

  Thank you Dan Dascalescu for this solution!
  Link, https://leetcode.com/problems/find-the-town-judge/discuss/2629846/Fastest-and-simplest-possible%3A-only-5-SLOC-commented

*/

function findJudge(n: number, trust: number[][]): number {
  const trustedBy: number[] = Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    trustedBy[a] = NaN;  // since the judge doesn't trust anyone, a[i] can't be the judge
    trustedBy[b]++;  // ++ applied to NaN is still NaN, and won't amount to n-1
  }
  // Because trust pairs are unique, there can be only one judge, or none at all.
  return trustedBy.indexOf(n-1) || 1;
};