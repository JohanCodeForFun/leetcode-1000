import { ListNode } from "./class/NodeList";

/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Linked list, slow and fast, daily
*/

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    if (slow) {
      slow = slow.next;
    }
    fast = fast.next.next;
  }

  return slow
};

