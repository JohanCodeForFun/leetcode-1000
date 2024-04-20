/*
    Time Complexity: O(n^3)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: Math.

    Thank you chatGPT for this solution!
*/

function largestTriangleArea(points: number[][]): number {
    let largestArea = 0;

    // Helper function to calculate area of a triangle given three points
    function area(p1: number[], p2: number[], p3: number[]): number {
        return 0.5 * Math.abs(p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1]));
    }

    // Nested loops to find all combinations of three points
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const p1 = points[i];
                const p2 = points[j];
                const p3 = points[k];
                const currentArea = area(p1, p2, p3);
                largestArea = Math.max(largestArea, currentArea);
            }
        }
    }

    return largestArea;
};
