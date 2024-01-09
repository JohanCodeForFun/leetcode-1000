/*
  In a linked list of size n, where n is even, the 
  ith node (0-indexed) of the linked list is known as 
  the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

  For example, if n = 4, then node 0 is the twin of node 3, 
  and node 1 is the twin of node 2. These are the only 
  nodes with twins for n = 4.

  The twin sum is defined as the sum of a node and its twin.

  Given the head of a linked list with even length, 
  return the maximum twin sum of the linked list.

Constraints:
  The number of nodes in the list is an even integer in the range [2, 105].
  1 <= Node.val <= 105
*/

import { pairSum } from "../src/2130-pairSum";
import { arrayToLinkedList } from "../src/utils/arrayToLinkedList";

describe("2130: Maximum Twin Sum of a Linked List", () => {
  it("first test", () => {
    const head = arrayToLinkedList([5,4,2,1]);
    const result = 6;

    const test = pairSum(head);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const head = arrayToLinkedList([4,2,2,3]);
    const result = 7;

    const test = pairSum(head);

    expect(test).toEqual(result);
  });
});
