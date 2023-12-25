import { ListNode } from "./class/NodeList";

// Thank you subscriber6436 for this solution
// link, https://leetcode.com/subscriber6436/

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}
