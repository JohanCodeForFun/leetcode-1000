/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: Array
*/

function countSeniors(details: string[]): number {
    let count = 0;

    for (const detail of details) {

        const age = Number(detail.slice(11, 13));

        if (age > 60) {
            count++
        }
    }

    return count;
}
