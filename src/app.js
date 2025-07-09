import { Hashmap } from './hashmap.js';
import { Linkedlist } from './linkedlist.js';

let list = new Linkedlist();
list.append('yes');
list.prepend('hello');
console.log(list.displayAsArray());

let testFunction = () => {
  return 'goodTest';
};

export { testFunction, Hashmap, Linkedlist };
