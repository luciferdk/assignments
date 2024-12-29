/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0; // Initialize the result variable
  }

  // Add a number to the result
  add(number) {
      this.result += number;
  }

  // Subtract a number from the result
  subtract(number) {
      this.result -= number;
  }

  // Multiply the result by a number
  multiply(number) {
      this.result *= number;
  }

  // Divide the result by a number
  divide(number) {
      if (number === 0) {
          throw new Error("Division by zero is not allowed.");
      }
      this.result /= number;
  }

  // Reset the result to 0
  clear() {
      this.result = 0;
  }

  // Return the current result
  getResult() {
      return this.result;
  }

  // Parse and evaluate a string expression
  calculate(expression) {
      // Remove extra spaces and validate the input
      const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove all spaces
      if (!/^[\d+\-*/().\s]+$/.test(sanitizedExpression)) {
          throw new Error("Invalid characters in expression.");
      }
// Check for division by zero explicitly
if (/\/0(?!\d)/.test(sanitizedExpression)) { 
  throw new Error("Division by zero is not allowed.");
}

      // Safely evaluate the expression
      try {
          const evaluatedResult = Function(`"use strict"; return (${sanitizedExpression})`)();
          if (isNaN(evaluatedResult)) {
              throw new Error("Invalid calculation.");
          }
          this.result = evaluatedResult;
          return this.result;
      } catch (error) {
          throw new Error("Invalid mathematical expression.");
      }
  }
}

module.exports = Calculator;
