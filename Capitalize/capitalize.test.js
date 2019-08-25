const capitalize = require('./capitalize');

test('Capitalizes first char in a string', () => {
  expect(capitalize('yoyomachine')).toBe('Yoyomachine');
});
