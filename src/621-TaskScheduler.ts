/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: Array

    Thank you Aarzoo islam for this solution!
    Link, https://leetcode.com/problems/task-scheduler/discuss/4896077/JavaScript-oror-Professional-Approach-and-In-Depth-Explanation
*/

function leastInterval(tasks: string[], n: number): number {
    const freq = Array(26).fill(0);

    for (let task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    freq.sort((a, b) => b - a);

    const maxChunk = freq[0] - 1;
    let idleSlots = maxChunk * n;

    for (let i = 1; i < 26; i++) {
        idleSlots -= Math.min(maxChunk, freq[i])
    }

    if (idleSlots < 0) {
        return tasks.length;
    } else {
        return tasks.length + idleSlots
    }
}
