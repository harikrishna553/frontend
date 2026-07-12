// Define basic math operations
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

// Calculator function that takes a function as a parameter
function calculator(a: number, b: number, operation: (x: number, y: number) => number): void {
    const result = operation(a, b);
    console.log(`Result of operation on ${a} and ${b} is: ${result}`);
}

// Example calls
calculator(10, 20, add);        // Output: 30
calculator(10, 20, subtract);   // Output: -10
calculator(10, 20, multiply);   // Output: 200
calculator(10, 2, divide);      // Output: 10
