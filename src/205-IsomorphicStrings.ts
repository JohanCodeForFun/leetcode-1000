/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Easy
    Tags: String

    Thank you, NeetCode, for this solution!
    Link, https://www.youtube.com/watch?v=7yF-U1hLEqQ
*/

function isIsomorphic(s: string, t: string): boolean {
    let mapST: { [key: string]: string } = {};
    let mapTS: { [key: string]: string } = {};

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        if ((mapST.hasOwnProperty(c1) && mapST[c1] !== c2) ||
            (mapTS.hasOwnProperty(c2) && mapTS[c2] !== c1)) {
            return false
        }

        mapST[c1] = c2;
        mapTS[c2] = c1;
    }

    return true
}
