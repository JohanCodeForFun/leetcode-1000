import {ListNode} from "./class/NodeList";

function reorderList(head: ListNode | null): void {
    // get a list of head reversed
    // add normal list on odd
    // add reversed list on even
    // modify the head list (?)

    // reverse list
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let nxt = curr.next;
        curr.next = prev;

        prev = curr;
        curr = nxt;
    }

    console.log(prev)

    let index = 1;
    let newNode = head;

    while (newNode !== null) {

        if (index % 2 !== 0) {
            newNode = newNode.next;
            index++;
            console.log("odd", newNode)

        } else {
            newNode = prev.next;
            prev = prev.next
            index++;
            console.log("even", newNode, prev)
        }
    }

    console.log(head, newNode);

    head = newNode;

};