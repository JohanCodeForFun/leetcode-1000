/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Difficulty: Medium
  Tags: Linked List, Math

  Thank you Abhifleet for the guidance!
  Link, https://leetcode.com/problems/add-two-numbers/discuss/4148275/Beats-100-users-oror-Easy-to-understand-oror-Please-upvote-if-you-appreciate-the-effort.
*/

import { ListNode } from "./class/NodeList";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = 0;
  let memory = 0;
  let l3 = new ListNode(0);
  let head: ListNode | null = l3;

  while (l1 || l2) {
    sum = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += memory;
    memory = Math.floor(sum / 10);
    sum %= 10;
    l3.next = new ListNode(sum);
    l3 = l3.next;
  }

  if (memory !== 0) {
    l3.next = new ListNode(memory);
  }

  return head?.next;
}
