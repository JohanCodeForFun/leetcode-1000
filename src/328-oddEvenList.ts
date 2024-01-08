import { ListNode } from "./class/NodeList";
/*
  Time Complexity: O(n)
  Time Complexity: O(1)

  Thank you Dhwaj Sharma for this solution.
  Link, https://leetcode.com/problems/odd-even-linked-list/discuss/1117125/Easy-JavaScript-solution(Runtime%3A-88ms)
*/

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head != null) {
    let odd = head,
      even = head.next,
      evenHead = even;

    while (even && even.next != null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
  }
  return head; 
}
