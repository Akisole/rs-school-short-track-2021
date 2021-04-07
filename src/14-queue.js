const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    // throw new Error('Not implemented');
    return this.length;
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    const node = new ListNode(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let prev = this.head;
      let cur = prev.next;
      while (cur !== null) {
        prev = cur;
        cur = prev.next;
      }
      prev.next = node;
    }
    this.length++;
  }

  dequeue() {
    // throw new Error('Not implemented');
    // if (this.head === null) return;
    const res = this.head.value;
    this.head = this.head.next;
    this.length--;
    return res;
  }
}

module.exports = Queue;
