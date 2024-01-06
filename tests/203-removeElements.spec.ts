/*
  Given the head of a linked list and an integer val, 
  remove all the nodes of the linked list that 
  has Node.val == val, and return the new head.

  
Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []


Constraints:
  The number of nodes in the list is in the range [0, 104].
  1 <= Node.val <= 50
  0 <= val <= 50
*/

import { arrayToLinkedList } from "../src/utils/arrayToLinkedList";
import { removeElements } from "../src/203-removeElements";

describe("2095: Delete Middle of The Linked List", () => {
  it("first test", () => {
    const head = arrayToLinkedList([1,2,6,3,4,5,6]), val = 6;
    const result = arrayToLinkedList([1,2,6,3,4,5]);

    const test = removeElements(head, val);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const head = arrayToLinkedList([]), val = 1;
    const result = arrayToLinkedList([]);

    const test = removeElements(head, val);

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const head = arrayToLinkedList([7,7,7,7]), val = 7;
    const result = arrayToLinkedList([]);

    const test = removeElements(head, val);

    expect(test).toEqual(result);
  });

  it("edge case", () => {
    const head = arrayToLinkedList([1]), val = 2;
    const result = arrayToLinkedList([1]);

    const test = removeElements(head, val);

    expect(test).toEqual(result);
  });

});
