#!/usr/bin/env node

class Linkedlist {
  head = null;
  tail = null;
  size = 0;

  constructor(listName) {
    this.listName = listName;
  }

  #getNewNode(dataObj) {
    const newNode = new this.#ListNode(dataObj);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else if (!this.head || !this.tail) {
      const falsyParameter = this.head ? 'head' : 'tail';
      console.error(`parameter ${falsyParameter} is falsy`);
    }
    this.size++;
    return newNode;
  }

  append(value) {
    const previousNode = this.tail;
    const newNode = this.#getNewNode({ value, previousNode });
    previousNode ? (previousNode.nextNode = newNode) : null;
    this.tail = newNode;
    return newNode;
  }

  prepend(value) {
    const nextNode = this.head;
    const newNode = this.#getNewNode({ value, nextNode });
    nextNode ? (nextNode.previousNode = newNode) : null;
    this.head = newNode;
    return newNode;
  }

  at(index) {
    let lastIndex = this.size - 1;
    if (index < 0 || index > lastIndex) {
      return undefined;
    }
    let currentElement;

    if (this.size / 2 < index) {
      currentElement = this.tail;
      //index is closer to the end of the list
      for (let i = lastIndex; i != index; i--) {
        currentElement = currentElement.previousNode;
      }
    } else {
      currentElement = this.head;
      //index is closer to the start of the list
      for (let i = 0; i != index; i++) {
        currentElement = currentElement.nextNode;
      }
    }
    return currentElement;
  }

  pop() {
    let oldTail = this.tail;
    let newTail = oldTail.previousNode;
    this.removeNode(oldTail);
    this.tail = newTail;

    this.size - 1;

    return oldTail;
  }

  contains(value) {
    let returnValue = false;

    function checkNodes(currentNode) {
      if (!currentNode) {
        return;
      } else if (currentNode.value === value) {
        returnValue = true;
      } else {
        checkNodes(currentNode.nextNode);
      }
    }

    checkNodes(this.head);
    return returnValue;
  }

  removeNode(node) {
    if (node.previousNode) {
      let previousNode = node.previousNode;
      previousNode.nextNode = node.nextNode;
    }

    if (node.nextNode) {
      let nextNode = node.nextNode;
      nextNode.previousNode = node.previousNodeNode;
    }
  }

  displayAsArray() {
    const list = this;
    let arr = [];
    if (!this.head) {
      return 'no nodes present';
    }
    function addNodes(node) {
      arr.push(node.value);
      if (node.nextNode) {
        addNodes(node.nextNode);
      }
    }
    addNodes(this.head);
    return arr;
  }

  find(value) {
    let currentNode = this.head;
    do {
      if (currentNode.value === value) {
        break;
      }
      currentNode = currentNode.nextNode;
    } while (currentNode != this.tail);
    return currentNode;
  }

  findIndex(value) {
    let currentNode = this.head;
    i = 0;
    do {
      if (currentNode.value === value) {
        break;
      }
      currentNode = currentNode.nextNode;
      i++;
    } while (currentNode != this.tail);
    return i;
  }

  #ListNode = class {
    constructor(dataObj) {
      this.value = dataObj.value || null;
      this.previousNode = dataObj.previousNode || null;
      this.nextNode = dataObj.nextNode || null;
    }
  };
}

export { Linkedlist };
