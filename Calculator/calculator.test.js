const calculator = require('./calculator');

test('Adds numbers', () => {
  expect(calculator.add(60, 40)).toBe(100);
});

test('Subtracts numbers', () => {
  expect(calculator.subtract(100, 1)).toBe(99);
});

test('Divides numbers', () => {
  expect(calculator.divide(100, 10)).toBe(10);
});

test('Multiplies numbers', () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});
