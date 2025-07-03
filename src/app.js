import { LinkedList } from './linkedList.js';

let list = new LinkedList();
list.append('yes');
list.prepend('hello');
console.log(list.displayAsArray());

let testFunction = () => {
  return 'goodTest';
};

export { testFunction };
