const caesarCipher = require('./caesarCipher');

test('Converts a capitol letter', () => {
  expect(caesarCipher('A', 1)).toBe('B');
});

test('Converts a lowercase letter', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('Converts a word', () => {
  expect(caesarCipher('abcdef', 5)).toBe('fghijk');
});

test('Converts case sensitive correctly', () => {
  expect(caesarCipher('AaBbCcDdEeFf', 5)).toBe('FfGgHhIiJjKk');
});

test('Converts past z correctly', () => {
  expect(caesarCipher('zoo', 10)).toBe('jyy');
});

test('Converts past Z correctly', () => {
  expect(caesarCipher('Zoo', 10)).toBe('Jyy');
});

test('Doesnt change punctuation', () => {
  expect(caesarCipher("Let's go to the Zoo!!", 20)).toBe(
    "Fyn'm ai ni nby Tii!!"
  );
});
