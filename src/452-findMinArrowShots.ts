/*
    Time Complexity: O(n log n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array, Greedy

    Thank you Aarzoo islam for this solution!
    Link, https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/discuss/4890975/JavaScript-oror-Professional-Approach-and-In-Depth-Explanation
*/

function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0]);

    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {

        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];

        } else {
            end = Math.min(end, points[i][1])
        }
    }

    return arrows;
};
