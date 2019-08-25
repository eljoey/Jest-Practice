const analyze = require('./analyze');

test('Gets the correct average', () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).average()).toBe(3.5);
});

test('Gets the min value', () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).min()).toBe(1);
});

test('Gets the max value', () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).max()).toBe(6);
});

test('Gets the length of the array', () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).length()).toBe(6);
});
