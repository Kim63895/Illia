class Calculator {
  add(number1, number2) {
    return number1 + number2;
  }
  subtract(number1, number2) {
    return number1 - number2;
  }
  multiply(number1, number2) {
    return number1 * number2;
  }       
  divide(number1, number2) {
    return number1 / number2;
  }
}
const calc = new Calculator();
console.log(calc.add(5, 3)); 
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6)); 
console.log(calc.divide(8, 2)); 
