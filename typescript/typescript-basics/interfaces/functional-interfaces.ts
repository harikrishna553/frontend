// Functional Interface for arithmetic operations
interface Operation {
  (x: number, y: number): number;
}

// Lambda implementations of the Operation interface
const add: Operation = (x, y) => x + y;
const subtract: Operation = (x, y) => x - y;
const multiply: Operation = (x, y) => x * y;
const divide: Operation = (x, y) => y !== 0 ? x / y : NaN;

// Function that accepts an Operation and prints the result
function performAndPrint(
  operationName: string,
  operation: Operation,
  x: number,
  y: number
): void {
  const result = operation(x, y);
  console.log(`${operationName} of ${x} and ${y} = ${result}`);
}

// Example usage
const a = 20, b = 10;

performAndPrint("Addition", add, a, b);
performAndPrint("Subtraction", subtract, a, b);
performAndPrint("Multiplication", multiply, a, b);
performAndPrint("Division", divide, a, b);
