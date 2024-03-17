/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

/*
    Time Complexity: O(log n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: Binary Search

    Thank you karlr42 for the solution.
    Link, https://leetcode.com/problems/first-bad-version/discuss/71344/JavaScript-solution-keysubtle-difference-from-other-languages
 */
var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let start = 1, end = n;

        while (start < end) {
            let mid = Math.floor(start + (end - start) / 2);

            if (isBadVersion(mid)) {
                end = mid;

            } else {
                start = mid + 1;
            }
        }

        return start
    };
};
