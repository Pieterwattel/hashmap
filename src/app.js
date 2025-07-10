import { Hashmap } from './hashmap.js';
import { Linkedlist } from './linkedlist.js';

let list = new Linkedlist();
list.append('yes');
list.prepend('hello');
console.log(list.displayAsArray());

let testFunction = () => {
  return 'goodTest';
};

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);

    hashCode = hashCode % 16;
  }

  return hashCode;
}

console.log(hash('aaa'));
console.log(hash('aaq'));

export { testFunction, Hashmap, Linkedlist };
