import {ListNode} from "./class/NodeList";

/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: LinkedList
*/

function reorderList(head: ListNode | null): void {
    if (head === null) return;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let secondHalf = slow.next;

    slow.next = null;

    // reverse the second half
    let prev = null;

    while (secondHalf !== null) {
        let next = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = next;
    }

    let left = head;
    let right = prev;

    // alternate the nodes
    while (right !== null && left !== null) {
        let leftNext = left.next;
        let rightNext = right.next;

        left.next = right;
        right.next = leftNext;

        left = leftNext;
        right = rightNext;
    }
}
