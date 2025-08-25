// Case 1: Interface with NO return type specified
interface Greet {
  (name: string); // Return type is not specified (implicitly 'any')
}

let greet1: Greet = (name: string) => {
  return `Hello, ${name}`;
};

console.log(greet1("Krishna")); // Output: Hello, Krishna

// Case 2: Interface with 'any' return type — you can return anything
interface Arithmetic {
  (x: number, y: number): any;
}

let sum: Arithmetic = (x, y) => x + y; // returns number
let sumResultAsStr: Arithmetic = (x, y) => `Sum of ${x} and ${y} is ${x + y}`; // returns string

console.log("Sum (number):", sum(10, 20));             // Output: Sum (number): 30
console.log("Sum (string):", sumResultAsStr(10, 20));  // Output: Sum (string): Sum of 10 and 20 is 30

// Case 3: Interface with 'void' return type — you can still return something, but it's ignored
interface ArithmeticOperations {
  (x: number, y: number): void;
}

let add: ArithmeticOperations = (x, y) => {
  return x + y; // Valid, even though return type is void — return value is ignored
};

let addResultAsStr: ArithmeticOperations = (x, y) => {
  return `Sum of ${x} and ${y} is ${x + y}`; // Also valid, return is ignored
};

console.log("Add (void return):", add(10, 20));            // Output: Add (void return): undefined
console.log("Add as String (void return):", addResultAsStr(10, 20)); // Output: Add as String (void return): undefined

// Case 4: Interface with explicit return type — MUST return that type
interface Operation {
  (x: number, y: number): number; // Must return a number
}

let subtract: Operation = (x, y) => x - y; // Valid

// If you try to return a string, TypeScript will show an error
// let invalidSubtract: Operation = (x, y) => `Result: ${x - y}`; // Error: Type 'string' is not assignable to type 'number'

console.log("Subtract:", subtract(10, 20)); // Output: Subtract: -10