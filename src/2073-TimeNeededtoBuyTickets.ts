/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy.
    Tags: Array.

    Thank you, Manish Doley for this solution!
    Link, https://leetcode.com/problems/time-needed-to-buy-tickets/discuss/4999632/Typescript-or-Rust-or-Easy-solution-with-intuition
*/

function timeRequiredToBuy(tickets: number[], k: number): number {
    const ticketToBuy = tickets[k];
    let time = 0;

    for (let i = 0; i < tickets.length; i++) {
        if(i <= k) {
            time += Math.min(ticketToBuy, tickets[i]);
        } else {
            time += Math.min(ticketToBuy - 1, tickets[i]);
        }
    }

    return time;
}