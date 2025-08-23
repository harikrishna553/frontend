// Using const for values that don't change
const num: number = 10;  // Explicitly declaring type number

const num1: number = 10;  // Explicitly declared as number
const num2 = 5;           // TypeScript infers num2 is a number

// Assigning one number variable to another
const num3: number = num2;

console.log(`Value of num3: ${num3}`);  // Output: Value of num3: 5

// Function to add two numbers with type annotations
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Using the function
const sum: number = addNumbers(num1, num2);
console.log(`Sum of ${num1} and ${num2} is: ${sum}`);  // Output: Sum of 10 and 5 is: 15

// Array of numbers and average calculation
const numbers: number[] = [num1, num2, num3, sum];

function calculateAverage(nums: number[]): number {
  const total = nums.reduce((acc, val) => acc + val, 0);
  return total / nums.length;
}

const average = calculateAverage(numbers);
console.log(`Average of all numbers: ${average}`);  // Output: Average of all numbers: ...
