/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: Array.
 */

function countStudents(students: number[], sandwiches: number[]): number {
    let unable = 0;

    while (students.length) {
        // shift to remove first

        if (sandwiches[0] === students[0]) {
            sandwiches.shift();
            students.shift();
            unable = 0;

        } else {
            // push to add end of queue
            students.push(<number>students.shift());
            unable++;

            if (unable === students.length) {
                break;
            }
        }

    }

    return students.length
}
