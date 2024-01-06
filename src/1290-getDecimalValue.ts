import { ListNode } from "./class/NodeList";
/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/

export function getDecimalValue(head: ListNode | null): number {
  let val = 0;
  while (head) {
    val = (val << 1) | head.val;
    head = head.next;
  }
  return val;
};