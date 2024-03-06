import { ListNode } from "./class/NodeList";

/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Linked List, fast and slow, daily
*/

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      return true
    }
  }

  return false;
};