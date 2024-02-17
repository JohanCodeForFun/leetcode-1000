/*
  Time Complexity: O(n)
  Space Complexity: O(n)

  Difficulty: Medium
  Tags: Array, priority queue, daily

  Thank you Sumit Pokhriyal for this solution!
  Link, https://leetcode.com/problems/furthest-building-you-can-reach/discuss/4741112/8-lines-of-optimized-code-or-Step-by-step-explanation
*/

import { PriorityQueue } from "./class/PriorityQueue";

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const n = heights.length;
  const pq = new MinPriorityQueue();

  for (let i = 0; i < n - 1; i++) {
    let diff = heights[i + 1] - heights[i];

    if (diff > 0) pq.enqueue(diff);
    if (pq.size() > ladders) bricks -= pq.dequeue().element;

    if (bricks < 0) return i;
  }

  return n - 1;
};