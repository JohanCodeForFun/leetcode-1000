import { reverseList } from "../src/206-reverseList";
import { arrayToLinkedList } from "../src/utils/arrayToLinkedList";
import { linkedListToArray } from "../src/utils/linkedListToArray";
/*
    Constraints
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000
*/

describe("206: Reverse Linked List", () => {
  it("first test", () => {
    const list = arrayToLinkedList([1, 2, 3, 4, 5]);
    let reversed = reverseList(list);

    expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it("second test", () => {
    const list = arrayToLinkedList([1, 2]);
    let reversed = reverseList(list);

    expect(linkedListToArray(reversed)).toEqual([2, 1]);
  });

  it("third test", () => {
    const list = arrayToLinkedList([]);
    let reversed = reverseList(list);

    expect(linkedListToArray(reversed)).toEqual([]);
  });
});
