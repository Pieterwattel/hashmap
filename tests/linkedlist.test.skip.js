import { Linkedlist } from '../src/linkedlist';

test('testThing', () => expect(2).toBe(2));

test('main contains linkedlist class constructor', () => {
  expect(Boolean(new Linkedlist())).toBe(true);
});

/*
test('string', () => {
  expect(something).toBe(thing);
});
*/
