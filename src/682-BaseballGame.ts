/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Easy
    Tags: Array
*/

function calPoints(operations: string[]): number {
    let scoreCount: number[] = [];

    for (let i = 0; i < operations.length; i++) {

        switch (operations[i]) {
            case "C":
                scoreCount.pop();
                break;
            case "D":
                scoreCount.push(Number(scoreCount[scoreCount.length - 1] * 2));
                break;
            case "+":
                scoreCount.push(Number(scoreCount[scoreCount.length - 1] + scoreCount[scoreCount.length - 2]));
                break;
            default:
                scoreCount.push(Number(operations[i]));
        }
    }

    return scoreCount.reduce((acc, val) => acc + val, 0)
}
