/*
    Time Complexity: O(E + N)
    Space Complexity: O(N)

    Thank you Chat-GPT for this explanation & solution.
*/

function findCenter(edges: number[][]): number {
    const nodeOccurrences: Record<number, number> = {};

    // Step 1: Counting Node Occurrences
    for (const edge of edges) {
        const [node1, node2] = edge;

        // Count occurrences for node1
        nodeOccurrences[node1] = (nodeOccurrences[node1] || 0) + 1;

        // Count occurrences for node2
        nodeOccurrences[node2] = (nodeOccurrences[node2] || 0) + 1;
    }

    // Step 2: Finding the Center
    for (const node in nodeOccurrences) {
        if (nodeOccurrences[node] === edges.length) {
            return Number(node); // Convert node to number before returning
        }
    }

    // If no center found (should not happen if input is valid)
    return -1;
}
