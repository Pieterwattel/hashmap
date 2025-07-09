import { testFunction, Hashmap, Linkedlist } from '../src/app';

console.log(Linkedlist);
console.log(Boolean(Linkedlist));

test('checks if jest works', () => {
  expect(testFunction()).toBe('goodTest');
});

test('main contains hashmap class constructor', () => {
  expect(Boolean(Hashmap)).toBe(true);
});

test('main contains linkedlist class constructor', () => {
  expect(Boolean(Linkedlist)).toBe(true);
});

//test to check if the linkedlist class exists

/*
test('string', () => {
  expect(something).toBe(thing);
});
*/

//check if
