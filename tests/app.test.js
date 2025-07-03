import { testFunction } from '../src/app';
import { LinkedList } from '../src/linkedList';
import { hashmap } from '../src/hashmap';

test('checks if jest works', () => {
  expect(testFunction()).toBe('goodTest');
});

function testThing() {
  return 2;
}

it('testThing', () => expect(testThing()).toBe(2));
