/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Easy
    Tags: Stack, String.
*/

function makeGood(s: string): string {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const prev: string = stack[stack.length - 1];
        const curr: string = s[i];

        if (prev &&
            prev !== curr &&
            prev.toLowerCase() == curr.toLowerCase()) {
            stack.pop();

        } else {
            stack.push(curr)
        }
    }

    return stack.join('')
};
