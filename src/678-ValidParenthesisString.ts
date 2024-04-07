/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: String.

    Thank you, Yogesh Kumar for this solution!
    Link, https://leetcode.com/problems/valid-parenthesis-string/discuss/4988307/Beats-100-Users-Easily-(Traverse-From-Both-Ends-oneby-one)
*/

function checkValidString(s: string): boolean {
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '(' || char === '*') {
            balance++;
        } else {
            balance--;
        }

        if (balance < 0) {
            return false;
        }
    }

    // reset balance for next count
    balance = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i];

        if (char === ')' || char === '*') {
            balance++;
        } else {
            balance--;
        }

        if (balance < 0) {
            return false;
        }
    }

    return true;
}
