/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Easy
    Tags: Array
*/

function calPoints(operations: string[]): number {
    let scoreCount = [];

    for (let i = 0; i < operations.length; i++) {

        if (parseInt(operations[i])) {
            scoreCount.push(Number(operations[i]))
        }

        if (operations[i] === "C") {
            scoreCount.pop()
        }

        if (operations[i] === "D") {
            scoreCount.push(Number(scoreCount[scoreCount.length - 1] * 2))
        }

        if (operations[i] === "+") {
            scoreCount.push(Number(scoreCount[scoreCount.length - 1] + scoreCount[scoreCount.length - 2]))
        }
    }

    return scoreCount.reduce((acc, val) => acc + val, 0)
}
