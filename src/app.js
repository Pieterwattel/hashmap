import { Hashmap } from './hashmap.js';
import { Linkedlist } from './linkedlist.js';

let list = new Linkedlist();
list.append('yes');
list.prepend('hello');
console.log(list.displayAsArray());

let testFunction = () => {
  return 'goodTest';
};

console.log(hash('aaa'));
console.log(hash('aaq'));

export { testFunction, Hashmap, Linkedlist };
