import { ListNode } from "./class/NodeList";
/*
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

export function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;
  if (head.val === val) {
      return removeElements(head.next,val);
  }
  head.next = removeElements(head.next,val);
  return head;
};