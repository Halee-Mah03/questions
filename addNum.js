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
  const array = [];

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] + l2[i] == i);
  }
  return array;
};

const l1 = [1, 2, 3, 7];
const l2 = [4, 5, 6, 10];
const result = addTwoNumbers(l1, l2);
console.log(result);
