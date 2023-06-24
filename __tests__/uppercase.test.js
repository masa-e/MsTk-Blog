const uppercase = require('../components/uppercase');

describe('uppercase', () => {
  test('with empty', () => {
    const str = '';
    const result = uppercase(str);
    expect(result).toBe('');
  });
  test('with not empty', () => {
    const str = 'hello';
    expect(uppercase(str)).toBe('HELLO');
  });
  test('with not a string', () => {
    const str = 7;
    expect(uppercase(str)).toBe('');
  });
});