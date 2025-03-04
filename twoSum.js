/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let remainder = 0;
  result = new ListNode();
  currentNode = result;

  let firstNumber = l1
  let secondNumber = l2

  while (firstNumber || secondNumber) {
    const sum = (firstNumber?.val || 0) + (secondNumber?.val || 0) + remainder;
    let digit = sum;

    if (sum >= 10) {
      digit = sum % 10;
      remainder = Math.floor(sum / 10);
    } else {
       remainder = null;
    }

    currentNode.val = digit;

    firstNumber = firstNumber?.next
    secondNumber = secondNumber?.next

    if(firstNumber || secondNumber) {
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
    }
  }

  if (remainder) {
    currentNode.next = new ListNode(remainder);
  }

  return result;
};
