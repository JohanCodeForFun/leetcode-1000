/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: Array
*/

function judgeCircle(moves: string): boolean {
    let horizontal = 0;
    let vertical = 0;

    for (const move of moves) {
        switch (move) {
            case "U":
                vertical += 1;
                break;
            case "D":
                vertical -= 1;
                break;
            case "L":
                horizontal += 1;
                break;
            case "R":
                horizontal -= 1;
                break;

        }
    }
    return horizontal === 0 && vertical === 0;
}
