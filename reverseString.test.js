const reverseString = require('./reverseString');

test('reverse string', () => {
expect (reverseString('olleh')).toBe('hello');
})

module.exports = reverseString;