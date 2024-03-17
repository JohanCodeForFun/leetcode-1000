/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/*
    Time Complexity: O(log n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: Binary Search

    Thank you Back to Basic for the solution.
    Link, https://leetcode.com/problems/guess-number-higher-or-lower/discuss/1517295/Javascript-Solution-Beats-99
*/

function guessNumber(n: number): number {
    let l = 1, r = n - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        let res = guess(mid);

        if (res === 0) {
            return mid;

        } else if (res === 1) {
            l = mid + 1;

        } else {
            r = mid - 1;
        }
    }

    return l;
}
