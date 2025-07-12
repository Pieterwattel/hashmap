import { Linkedlist } from './linkedlist';

class Hashmap {
  length = 0;
  constructor() {}

  //public interface
  get buckets() {
    return this.#buckets;
  }

  set(key, value) {
    const hashCode = this.#hash(key);

    let bucketData = this.buckets[hashCode];
    if (bucketData == undefined) {
      this.buckets[hashCode] = { value, key };
    } else {
      if (bucketData instanceof Linkedlist) {
        bucketData.append({ key, value });
      } else {
        //make the two values into one linked list
        const linkedlist = new Linkedlist();
        linkedlist.append(bucketData);
        linkedlist.append({ key, value });
        this.buckets[hashCode] = linkedlist;
      }
    }
    console.log(this.length);
    this.length++;
  }

  clear() {
    this.#buckets = Array(16).fill(undefined);
    this.length = 0;
  }

  get(key) {
    const hashCode = this.#hash(key);
    const bucketWithKey = this.#buckets[hashCode];
    let value;

    if (this.#buckets[hashCode] == undefined) {
      throw new Error('bucket is empty!');
      return;
    }

    if (bucketWithKey instanceof Linkedlist) {
      const list = bucketWithKey;
      const node = this.#findNodeWithKeyInLinkedlist({ key, list });
      value = this.#getNodeValue(node);
    } else {
      value = bucketWithKey.value;
    }

    return value;
  }

  hasKey(key) {
    const hashCode = this.#hash(key);
    const bucketWithKey = this.#buckets[hashCode];
    let returnValue = false;

    if (this.#buckets[hashCode] == undefined) {
      return false;
    }

    if (bucketWithKey instanceof Linkedlist) {
      const list = bucketWithKey;
      const node = this.#findNodeWithKeyInLinkedlist({ key, list });
      returnValue = true;
    } else {
      bucketWithKey.key == key ? (returnValue = true) : null;
    }
    return returnValue;
  }

  remove(key) {
    const hashCode = this.#hash(key);
    const bucketWithKey = this.#buckets[hashCode];
    let returnValue = false;

    if (this.#buckets[hashCode] == undefined) {
      return false;
    }

    if (bucketWithKey instanceof Linkedlist) {
      const list = bucketWithKey;
      const node = this.#findNodeWithKeyInLinkedlist({ key, list });
      list.removeNode(node);
      returnValue = node.value;
    } else if (bucketWithKey.key == key) {
      returnValue = bucketWithKey;
      this.#buckets[hashCode] = undefined;
    }
    this.length--;
    return returnValue;
  }

  keys() {
    let keyArray = [];
    this.#buckets.forEach((bucket) => {
      if (bucket instanceof Linkedlist) {
        list = bucket;
        listArray = list.displayAsArray();
        listArray.forEach((keyValuePair) => {
          keyArray.push(keyValuePair.key);
        });
      } else if (bucket != undefined) {
        keyArray.push(bucket.key);
      }
    });
    return keyArray;
  }

  values() {
    let keyArray = [];
    this.#buckets.forEach((bucket) => {
      if (bucket instanceof Linkedlist) {
        list = bucket;
        listArray = list.displayAsArray();
        listArray.forEach((keyValuePair) => {
          keyArray.push(keyValuePair.value);
        });
      } else if (bucket != undefined) {
        keyArray.push(bucket.value);
      }
    });
    return keyArray;
  }

  entries() {
    let keyArray = [];
    this.#buckets.forEach((bucket) => {
      if (bucket instanceof Linkedlist) {
        list = bucket;
        listArray = list.displayAsArray();
        listArray.forEach((keyValuePair) => {
          keyArray.push(keyValuePair);
        });
      } else if (bucket != undefined) {
        keyArray.push(bucket);
      }
    });
    return keyArray;
  }

  //private interface
  #buckets = Array(16).fill(undefined);

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.#buckets.length;
    }

    return hashCode;
  }

  #findNodeWithKeyInLinkedlist(dataObj) {
    const list = dataObj.list;
    const key = dataObj.key;
    let value = null;

    let currentNode = list.head;
    do {
      if (currentNode.value.key === key) {
        return currentNode;
        break;
      }
      currentNode = currentNode.nextNode;
    } while (currentNode != this.tail);
    return false;
  }

  #getNodeValue(node) {
    let keyValuePair = node.value;
    return keyValuePair.value;
  }
}

export { Hashmap };
