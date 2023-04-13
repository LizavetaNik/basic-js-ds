const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let nextElem = l.next;
  let elem = l;

  if (elem.value === k) {
    l = nextElem;
    elem = nextElem;
    nextElem = nextElem.next;
  }
    
  while (nextElem) {
    if (nextElem.value === k) 
    {
      elem.next = nextElem.next;
      nextElem = elem.next;
    } else {
      elem = nextElem;
      nextElem = nextElem.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
