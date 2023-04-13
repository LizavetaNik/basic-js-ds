const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

function createList(arrFunc) {
  let result;
  const newArrFunc = arrFunc.reverse();
  result = newArrFunc.reduce( (x, y) => {
    if (x) {
      const lastElem = new ListNode(y);
      lastElem.next = x;
      return lastElem;
    }
    return new ListNode(y);
  }, null );

  return result;
}

class Queue {
  constructor(){
    this.arrQueue = [];
  }; 

  getUnderlyingList() {   
    return createList(this.arrQueue);
  }

  enqueue(value) {
    this.arrQueue.push(value);
  }

  dequeue() {
    return this.arrQueue.shift();
  }
}

module.exports = {
  Queue
};
