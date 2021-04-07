const ListNode = require('../extensions/list-node');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  // throw new Error('Not implemented');
  let list = null;
  let tmp = l;
  while (tmp !== null && tmp.value === k) {
    tmp = tmp.next;
  }
  if (tmp !== null) {
    let cur = tmp.next;
    list = new ListNode(tmp.value);
    let curList = list;
    while (cur !== null) {
      if (cur.value !== k) {
        curList.next = new ListNode(cur.value);
        curList = curList.next;
      }
      cur = cur.next;
    }
  }

  return list;
}

module.exports = removeKFromList;
