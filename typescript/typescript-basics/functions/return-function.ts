function calculator(operation: string): (num1: number, num2: number) => number {
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  function multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  function divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }

  // Choose which function to return based on the operation
  if (operation === 'add') {
    return add;
  } else if (operation === 'sub') {
    return subtract;
  } else if (operation === 'mul') {
    return multiply;
  } else if (operation === 'div') {
    return divide;
  } else {
    throw new Error("Unsupported operation. Use 'add', 'sub', 'mul', or 'div'");
  }
}

const addition = calculator('add');
console.log(addition(10, 5)); // Output: 15

const subtraction = calculator('sub');
console.log(subtraction(10, 5)); // Output: 5

const multiplication = calculator('mul');
console.log(multiplication(10, 5)); // Output: 50

const division = calculator('div');
console.log(division(10, 5)); // Output: 2
