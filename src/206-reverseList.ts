import { ListNode } from "./class/NodeList";

// Thank you madiweaver for this solution
// link, https://leetcode.com/madiweaver/

// time complexity of the reverseList function is O(n).
// The space complexity of the function is O(n).

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  function reverse(curr: ListNode, parent: ListNode | null): ListNode {
    const next = curr.next;

    curr = new ListNode(curr.val, parent);

    if (!next) return curr;
    return reverse(next, curr);
  }
  return reverse(head, null)
}
