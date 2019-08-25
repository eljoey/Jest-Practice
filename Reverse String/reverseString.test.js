const reverseString = require('./reverseString');

test('Reverses given string', () => {
  expect(reverseString('tomato')).toBe('otamot');
});

test('Reverses given string', () => {
  expect(reverseString('You Win!')).toBe('!niW uoY');
});
