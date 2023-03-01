const stringLength = require('./string');

test('String equals to', () => {
  expect(stringLength("Dheeraj")).toBe(7);
});

test('String equals to', () => {
  expect(stringLength("Rocky")).toBe(5);
});

test('String equals to', () => {
  expect(() => {stringLength1("");}).toThrow();
});


