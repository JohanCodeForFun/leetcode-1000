/*
Given head which is a reference node to a singly-linked list. 
The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.

Constraints:
  The Linked List is not empty.
  Number of nodes will not exceed 30.
  Each node's value is either 0 or 1.
*/

import { getDecimalValue } from "../src/1290-getDecimalValue";
import { arrayToLinkedList } from "../src/utils/arrayToLinkedList";

describe("1290: Get Decimal Value", () => {
  it("first test", () => {
    const head = arrayToLinkedList([1, 0, 1]);
    const result = 5;

    const test = getDecimalValue(head);

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const head = arrayToLinkedList([0]);
    const result = 0;

    const test = getDecimalValue(head);

    expect(test).toEqual(result);
  });
});
