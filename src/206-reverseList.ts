import { ListNode } from "./class/NodeList";

// Thank you neetcode for this solution
// link, https://www.youtube.com/watch?v=G0_I-ZF0S38

// time complexity of the reverseList function is O(n).
// The space complexity of the function is O(1).

function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    let nxt = curr.next;
    curr.next = prev;

    prev = curr;
    curr = nxt;
  }

  return prev;
}
