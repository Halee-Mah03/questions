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
  const result = new Array(l1.length);

  for (let i = 0; i < l1.length; i++) {
    result[i] = l1[i] + l2[i];
  }
  return result;
};

const l1 = [1, 2, 3, 4];
const l2 = [5, 6, 7, 8];
console.log(addTwoNumbers(l1, l2));
