import { ListNode } from "./class/NodeList";

/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Medium
  Tags: Linked List, fast and slow
*/

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next!;
        fast = fast.next!;
      }

      return slow
    }
  }

  return null;
};
