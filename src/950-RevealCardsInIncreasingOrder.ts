/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Medium.
    Tags: Array, Queue.

    Thank you, Anucha for this solution!
    Link, https://leetcode.com/problems/reveal-cards-in-increasing-order/discuss/5002140/js-and-ts-with-queue-solution.
*/

function deckRevealedIncreasing(deck: number[]): number[] {
    deck.sort((a, b) => a - b);

    const result = Array.from(deck).fill(0)
    const queue: number[] = [];

    for (let i = 0; i < result.length; i++) {
        queue.push(i)
    }

    for (let i = 0; i < result.length; i++) {
        result[queue[0]] = deck[i];
        queue.shift();

        const temp = queue[0];

        queue.shift();
        queue.push(temp)
    }

    return result;
};
