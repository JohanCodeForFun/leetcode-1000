import {ListNode} from "./class/NodeList";
/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Easy
    Tags: LinkedList
*/
function isPalindrome(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    while (slow !== null) {
        if (slow.val !== prev.val) {
            return false;
        }
        slow = slow.next;
        prev = prev.next;
    }

    return true;
}
