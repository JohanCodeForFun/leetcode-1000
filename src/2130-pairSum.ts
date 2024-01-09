import { ListNode } from "./class/NodeList";
/*
  Time Complexity: O(n)
  Space Complexity: O(1)

  Thank you Ismail Bentabet for this solution.
  Link, https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/discuss/4394497/Beats-98.10-of-users-with-Typescript-oror-Floyd's-Tortoise-and-Hare-Algorithm
*/

export function pairSum(head: ListNode | null): number {
  // Initialize two pointers, fast and slow, both starting from the head
  let fast = head;
  let slow = head;

  // Initialize a variable to keep track of the reversed part of the list
  let prev = null;

  // Reverse the first half of the linked list using slow and prev
  while (fast && fast.next) {
    fast = fast.next.next; // Move fast two steps
    if (slow) {
      let temp = slow.next; // Store the next node of slow
      slow.next = prev; // Reverse the link
      prev = slow; // Move prev to slow
      slow = temp; // Move slow to the stored next node
    }
  }

  // Initialize a variable to store the maximum pair sum
  let res = 0;

  // Traverse the reversed part of the list and the remaining part
  while (slow) {
    if (prev) {
      // Calculate the pair sum and update the result if needed
      res = Math.max(res, prev.val + slow.val);

      // Move to the next nodes in both the reversed and remaining parts
      slow = slow.next;
      prev = prev.next;
    }
  }

  // Return the maximum pair sum
  return res;
}
