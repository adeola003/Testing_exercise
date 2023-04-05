//Task 1
const stringLength = (string) => {
    if(string.length >= 1 && string.length <= 10){
        return string.length
    }
    else {
        throw new Error('String must be at least1 character long and not longer than 10')
    }
    
};
const str = "abcd";


//task2
function reverseString(string) {
    return string.split('').reverse().join('');
  };

  //task 3
  // calculator.js

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    }
  };

  const calc = new Calculator;
  console.log(calc.subtract(6, 2));

  // Task 4
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  




module.exports = {stringLength, reverseString, Calculator, capitalize};