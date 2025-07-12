import { Linkedlist } from '../src/linkedlist';

let list1 = new Linkedlist();

test('main contains linkedlist class constructor', () => {
  expect(Boolean(new Linkedlist())).toBe(true);
});

test('linkedlist has a find method', () => {
  list1.append('value1');
  list1.append('value2');
  list1.append('value3');
  expect(list1.findIndex('value2')).toBe(1);
});

test('linkedlist has a find method', () => {
  list1.append('value1');
  list1.append('value2');
  list1.append('value3');
  expect(list1.find('value2').value).toBe('value2');
});

/*
test('string', () => {
  expect(something).toBe(thing);
});
*/
