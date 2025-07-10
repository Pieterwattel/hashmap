import { Hashmap } from '../src/hashmap';

test('testThing', () => expect(3).toBe(3));

test('main contains hashmap class constructor', () => {
  expect(Boolean(new Hashmap())).toBe(true);
});

const testHashmap = new Hashmap();

test('a new hashmap has buckets', () => {
  expect(Array.isArray(testHashmap.buckets)).toBe(true);
});

test.only('hashmap can receive value', () => {
  testHashmap.set('key1', 'value1');
  expect(testHashmap.buckets.some(Boolean)).toBe(true);
});

test('set - hashmap length changes when a value is added', () => {
  testHashmap.set('key2', 'value2');
  expect(testHashmap.length > 1).toBe(true);
});

test('clear - can clear hashmap', () => {
  testHashmap.set('key3', 'value3');
  testHashmap.clear();
  expect(testHashmap.some(Boolean)).toBe(false);
});

test('can make a linked list in a bucket', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');

  expect(Boolean(testHashmap.buckets[0].nextNode) == true);
});

test('get - can get value from key', () => {
  testHashmap.set('key5', 'value5');
  expect(testHashmap.get('key5')).toBe('value5');
});

test('has - hashmap can confirm if a key is present', () => {
  testHashmap.clear();
  testHashmap.set('key5', 'value5');
  expect(testHashmap.has('key5')).toBe(true);
  expect(testHashmap.has('key4')).toBe(false);
});

test('remove - hashmap can remove a key', () => {
  testHashmap.clear();
  testHashmap.set('key5', 'value5');
  testHashmap.set('key4', 'value4');

  testHashmap.remove('key4');

  expect(testHashmap.has('key5')).toBe(true);
  expect(testHashmap.has('key4')).toBe(false);
});

test('keys() - returns an array with all keys', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');

  expect(testHashmap.keys() == ['aaa', 'aaq']);
});

test('values() - returns an array with all values', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');

  expect(testHashmap.values() == ['key-aaa', 'key-aaq']);
});

test('entries() - returns an array with all values', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');

  expect(
    testHashmap.values() ==
      [
        ['aaa', 'key-aaa'],
        ['aaq', 'key-aaq'],
      ],
  );
});

test('bucketAmount grows when max values is added for size', () => {
  testHashmap.clear();
  testHashmap.set('A', 'a');
  testHashmap.set('B', 'b');
  testHashmap.set('C', 'c');
  testHashmap.set('D', 'd');
  testHashmap.set('E', 'e');
  testHashmap.set('F', 'f');
  testHashmap.set('G', 'g');
  testHashmap.set('H', 'h');
  testHashmap.set('I', 'i');
  testHashmap.set('J', 'j');
  testHashmap.set('K', 'k');
  testHashmap.set('L', 'l');
  testHashmap.set('M', 'm');
  testHashmap.set('N', 'n');
  testHashmap.set('O', 'o');

  expect(testHashmap.array.length > 17);
});

/*
test('string', () => {
  expect(something).toBe(thing);
});
*/
