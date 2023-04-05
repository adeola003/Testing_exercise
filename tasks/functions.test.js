const { test } = require('node:test');

//task 1
const {stringLength, reverseString, Calculator, capitalize} = require ('./functions');

test('stringLength returns the correct length of a string', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('ab')).toBe(2);
  expect(stringLength('1234567')).toBe(7);
  expect(() => stringLength('stringolatificationalisation')).toThrow();
});

//task 2
test('reverseString returns the correct reversed string', () => {
  expect(reverseString('')).toBe('');
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('1234')).toBe('4321');
  expect(reverseString('racecar')).toBe('racecar');
});

//task 3
   let calculator = new Calculator();

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts a positive number from a larger positive number', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('subtracts a negative number from a positive number', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    test('subtracts a positive number from a larger negative number', () => {
      expect(calculator.subtract(-5, 2)).toBe(-7);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides a positive number by a smaller positive number', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('divides a negative number by a smaller negative number', () => {
      expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
  });

  //Task 4
  test('capitalize should capitalize the first character of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
  

