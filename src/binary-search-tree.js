const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.binTree = null;
  };

  root() {
    return this.binTree;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.binTree === null) {
      this.binTree = newNode;
      return;
    }

    let currentNode = this.binTree;
    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let current = this.binTree;
    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.binTree;

    while ( !(current === null) ) {
      if (data === current.data) {
        return current;
      }
      
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  remove(data) {
    const removeNode = (current, data) => {
      if (current === null) {
        return null;
      }
      if (data === current.data) {
        if (current.left === null && current.right === null) {
          return null;
        }
        if (current.left === null) {
          return current.right;
        }
        if (current.right === null) {
          return current.left;
        }
        let tempNode = current.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        current.data = tempNode.data;
        current.right = removeNode(current.right, tempNode.data);
        return current;
      } else if (data < current.data) {
        current.left = removeNode(current.left, data);
        return current;
      } else {
        current.right = removeNode(current.right, data);
        return current;
      }
    };

    this.binTree = removeNode(this.binTree, data);
  }

  min() {
    let current = this.binTree;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.binTree;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

}

module.exports = {
  BinarySearchTree
};