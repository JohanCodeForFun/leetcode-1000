/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: String
*/

function maxDepth(s: string): number {
    let depth = 0;
    let openBrackets = 0;

    for (let char of s) {
        if (char === "(") {
            openBrackets++

        } else if (char === ")") {
            openBrackets--;
        }

        depth = Math.max(depth, openBrackets);
    }

    return depth;
}
