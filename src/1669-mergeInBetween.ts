import {ListNode} from "./class/NodeList";
/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Difficulty: Medium
    Tags: LinkedList
*/
function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let start: ListNode | null = null;
    let end: ListNode | null = list1;

    for (let index = 0; index < b; index++) {
        if (index === a - 1) {
            start = end
        }

        end = end.next;
    }

    start.next = list2;

    while (list2.next !== null) {
        list2 = list2.next;
    }

    list2.next = end.next;
    end.next = null;

    return list1;
};