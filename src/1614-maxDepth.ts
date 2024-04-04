/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: String
*/

function maxDepth(s: string): number {
    let depth = 0;
    let temp = 0;

    for (let char of s) {
        if (char === "(") {
            depth++
        }

        if (char === ")") {
            temp = Math.max(temp, depth);
            depth--;
        }
    }

    return temp;
}
