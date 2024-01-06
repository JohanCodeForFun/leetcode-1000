import { ListNode } from "./class/NodeList";

/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Tags: Linked list, two pointers
*/

export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head.next;

  while (fast.next && fast.next.next) {
    if (slow.next) {
      slow = slow.next;
    }
    fast = fast.next.next;
  }

  if (slow.next) {
    slow.next = slow.next?.next;
  }

  return head;
}
