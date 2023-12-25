import { ListNode } from "../class/NodeList";

export const linkedListToArray = (head: ListNode | null): number[] => {
  let arr = [];
  let current = head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};