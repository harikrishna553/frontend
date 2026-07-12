// Example demonstrating TypeScript type inference and 'any' type behavior

// TypeScript infers the type of 'n' as number because it is initialized with 10
let n = 10;
console.log(`Value of n: ${n}`);
console.log(`TypeScript infers 'n' as 'number'`);
console.log(`At runtime, typeof n is: ${typeof n}`); // Outputs: number

console.log('----------------------------');

// Declaring 'score' without initialization
// TypeScript assigns the type 'any' to 'score' because no initial value is provided
let score;
console.log(`Initial value of score: ${score}`); // Outputs: undefined (runtime value)
console.log(`TypeScript infers 'score' as 'any' because it is uninitialized`);
console.log(`At runtime, typeof score is: ${typeof score}`); // Outputs: undefined

console.log('----------------------------');

// Assigning a number to 'score' (allowed because 'score' is 'any')
score = 5;
console.log(`After assigning number 5, value of score: ${score}`);
console.log(`At runtime, typeof score is: ${typeof score}`); // Outputs: number

console.log('----------------------------');

// Assigning a string to 'score' (also allowed because 'score' is 'any')
score = "high";
console.log(`After assigning string "high", value of score: ${score}`);
console.log(`At runtime, typeof score is: ${typeof score}`); // Outputs: string

console.log('----------------------------');

// Example of explicitly typing a variable to restrict its type
let age: number;
age = 25;            // OK
// age = "twenty";   // Error: Type 'string' is not assignable to type 'number'
// Uncommenting the above line will cause a TypeScript compile-time error
console.log(`Explicitly typed variable 'age' with value: ${age}`);
console.log(`At runtime, typeof age is: ${typeof age}`); // Outputs: number
