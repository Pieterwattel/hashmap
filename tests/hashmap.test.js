import { Hashmap } from '../src/hashmap';

test('main contains hashmap class constructor', () => {
  expect(Boolean(new Hashmap())).toBe(true);
});

const testHashmap = new Hashmap();

test('a new hashmap has buckets', () => {
  expect(Array.isArray(testHashmap.buckets)).toBe(true);
});

test('hashmap can receive value', () => {
  testHashmap.set('key1', 'value1');
  expect(testHashmap.buckets.some(Boolean)).toBe(true);
});

test('set - hashmap length changes when a value is added', () => {
  testHashmap.clear();
  testHashmap.set('key2', 'value2');
  testHashmap.set('key3', 'value3');
  expect(testHashmap.length > 1).toBe(true);
});

test('clear - can clear hashmap', () => {
  testHashmap.clear();
  testHashmap.set('key3', 'value3');
  testHashmap.clear();
  expect(testHashmap.buckets.some(Boolean)).toBe(false);
});

test('can make a linked list in a bucket', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');

  expect(Boolean(testHashmap.buckets[1].nextNode) == true);
});

test('get - can get value from key', () => {
  testHashmap.set('key5', 'value5');
  expect(testHashmap.get('key5')).toBe('value5');
});

test('get - can get value from key when bucket contains linked list', () => {
  testHashmap.clear();
  testHashmap.set('key-aaa', 'aaa');
  testHashmap.set('key-aaq', 'aaq');

  expect(testHashmap.get('key-aaa')).toBe('aaa');
});

test('has - hashmap can confirm if a key is present', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'aaaVal');
  testHashmap.set('aaq', 'aaqVal');
  testHashmap.set('aac', 'aacVal');

  expect(testHashmap.hasKey('aaa')).toBe(true);
  expect(testHashmap.hasKey('aab')).toBe(false);
  expect(testHashmap.hasKey('aaq')).toBe(true);
  expect(testHashmap.hasKey('aac')).toBe(true);
});

test('remove - hashmap can remove a key', () => {
  testHashmap.clear();
  testHashmap.set('key5', 'value5');
  testHashmap.set('key4', 'value4');
  testHashmap.set('key3', 'value3');

  testHashmap.remove('key4');

  expect(testHashmap.hasKey('key5')).toBe(true);
  expect(testHashmap.hasKey('key4')).toBe(false);
  expect(Boolean(testHashmap.remove('key3'))).toBe(true);
  expect(Boolean(testHashmap.remove('key2'))).toBe(false);
});

test('keys() - returns an array with all keys', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');
  testHashmap.set('aab', 'key-aab');

  expect(testHashmap.keys().includes('aaa')).toBe(true);
  expect(testHashmap.keys().includes('aaq')).toBe(true);
  expect(testHashmap.keys().includes('aab')).toBe(true);
  expect(testHashmap.keys().includes('aaz')).toBe(false);
});

test('values() - returns an array with all values', () => {
  testHashmap.clear();
  testHashmap.set('key-aaa', 'aaa');
  testHashmap.set('key-aaq', 'aaq');
  testHashmap.set('key-aab', 'aab');

  expect(testHashmap.values().includes('aaa')).toBe(true);
  expect(testHashmap.values().includes('aaq')).toBe(true);
  expect(testHashmap.values().includes('aab')).toBe(true);
  expect(testHashmap.values().includes('aaz')).toBe(false);
});

test('entries() - returns an array with all entries', () => {
  testHashmap.clear();
  testHashmap.set('key-aaa', 'aaa');
  testHashmap.set('key-aaq', 'aaq');

  expect(testHashmap.entries()).toEqual(
    expect.arrayContaining([{ key: 'key-aaa', value: 'aaa' }]),
  );

  expect(testHashmap.entries()).toEqual(
    expect.arrayContaining([{ key: 'key-aaq', value: 'aaq' }]),
  );

  expect(testHashmap.entries()).not.toEqual(
    expect.arrayContaining([{ key: 'key-aab', value: 'aab' }]),
  );
});

test('bucketAmount grows when max values is added for size', () => {
  expect(testHashmap.logs()).toBe(undefined);

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

  expect(testHashmap.buckets.length > 17).toBe(true);
  expect(testHashmap.hasKey('C')).toBe(true);

  expect(testHashmap.logs()).toBe(undefined);
});

test('test after bucket size increase: a new hashmap has buckets', () => {
  expect(Array.isArray(testHashmap.buckets)).toBe(true);
});

test('test after bucket size increase: hashmap can receive value', () => {
  testHashmap.set('key1', 'value1');
  expect(testHashmap.buckets.some(Boolean)).toBe(true);
});

test('test after bucket size increase: set - hashmap length changes when a value is added', () => {
  testHashmap.clear();
  testHashmap.set('key2', 'value2');
  testHashmap.set('key3', 'value3');
  expect(testHashmap.length).toBe(2);
});

test('test after bucket size increase: clear - can clear hashmap', () => {
  testHashmap.clear();
  testHashmap.set('key3', 'value3');
  testHashmap.clear();
  expect(testHashmap.buckets.some(Boolean)).toBe(false);
});

test('test after bucket size increase: can make a linked list in a bucket', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');

  expect(Boolean(testHashmap.buckets[1].nextNode) == true);
});

test('test after bucket size increase: get - can get value from key', () => {
  testHashmap.set('key5', 'value5');
  expect(testHashmap.get('key5')).toBe('value5');
});

test('test after bucket size increase: get - can get value from key when bucket contains linked list', () => {
  testHashmap.clear();
  testHashmap.set('key-aaa', 'aaa');
  testHashmap.set('key-aaq', 'aaq');

  expect(testHashmap.get('key-aaa')).toBe('aaa');
});

test('test after bucket size increase: has - hashmap can confirm if a key is present', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'aaaVal');
  testHashmap.set('aaq', 'aaqVal');
  testHashmap.set('aac', 'aacVal');

  expect(testHashmap.hasKey('aaa')).toBe(true);
  expect(testHashmap.hasKey('aab')).toBe(false);
  expect(testHashmap.hasKey('aaq')).toBe(true);
  expect(testHashmap.hasKey('aac')).toBe(true);
});

test('test after bucket size increase: remove - hashmap can remove a key', () => {
  testHashmap.clear();
  testHashmap.set('key5', 'value5');
  testHashmap.set('key4', 'value4');
  testHashmap.set('key3', 'value3');

  testHashmap.remove('key4');

  expect(testHashmap.hasKey('key5')).toBe(true);
  expect(testHashmap.hasKey('key4')).toBe(false);
  expect(Boolean(testHashmap.remove('key3'))).toBe(true);
  expect(Boolean(testHashmap.remove('key2'))).toBe(false);
});

test('test after bucket size increase: keys() - returns an array with all keys', () => {
  testHashmap.clear();
  testHashmap.set('aaa', 'key-aaa');
  testHashmap.set('aaq', 'key-aaq');
  testHashmap.set('aab', 'key-aab');

  expect(testHashmap.keys().includes('aaa')).toBe(true);
  expect(testHashmap.keys().includes('aaq')).toBe(true);
  expect(testHashmap.keys().includes('aab')).toBe(true);
  expect(testHashmap.keys().includes('aaz')).toBe(false);
});

test('test after bucket size increase: values() - returns an array with all values', () => {
  testHashmap.clear();
  testHashmap.set('key-aaa', 'aaa');
  testHashmap.set('key-aaq', 'aaq');
  testHashmap.set('key-aab', 'aab');

  expect(testHashmap.values().includes('aaa')).toBe(true);
  expect(testHashmap.values().includes('aaq')).toBe(true);
  expect(testHashmap.values().includes('aab')).toBe(true);
  expect(testHashmap.values().includes('aaz')).toBe(false);
});

test('test after bucket size increase: entries() - returns an array with all entries', () => {
  testHashmap.clear();
  testHashmap.set('key-aaa', 'aaa');
  testHashmap.set('key-aaq', 'aaq');

  expect(testHashmap.entries()).toEqual(
    expect.arrayContaining([{ key: 'key-aaa', value: 'aaa' }]),
  );

  expect(testHashmap.entries()).toEqual(
    expect.arrayContaining([{ key: 'key-aaq', value: 'aaq' }]),
  );

  expect(testHashmap.entries()).not.toEqual(
    expect.arrayContaining([{ key: 'key-aab', value: 'aab' }]),
  );
});

/*
test('test after bucket size increase: string', () => {
  expect(something).toBe(thing);
});
*/
