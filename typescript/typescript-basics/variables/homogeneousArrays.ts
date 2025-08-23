// Two ways to declare an array of strings

// Using generic syntax
let frameworks1: Array<string> = ["Angular", "React", "Vue"];

// Using shorthand syntax
let frameworks2: string[] = ["Angular", "React", "Vue"];

console.log("Frameworks1:", frameworks1);
console.log("Frameworks2:", frameworks2);

// Accessing elements by index
console.log("First:", frameworks1[0]);  // Angular
console.log("Second:", frameworks1[1]); // React
console.log("Third:", frameworks1[2]);  // Vue

// Length of the array
console.log("Length:", frameworks1.length); // 3

// Adding elements
frameworks1.push("Svelte");
console.log("After push:", frameworks1); 
// ["Angular", "React", "Vue", "Svelte"]

// Removing last element
frameworks1.pop();
console.log("After pop:", frameworks1); 
// ["Angular", "React", "Vue"]

// Checking for existence
console.log("Includes React?", frameworks1.includes("React")); // true
console.log("Includes Ember?", frameworks1.includes("Ember")); // false

// Iterating over array
for (let fw of frameworks1) {
  console.log("For...of:", fw);
}

frameworks1.forEach((fw, index) => {
  console.log(`forEach [${index}]:`, fw);
});

// Transforming array
let upperCaseFrameworks: string[] = frameworks1.map(fw => fw.toUpperCase());
console.log("Uppercase:", upperCaseFrameworks);

// Type safety in action
// frameworks1.push(123); // Error: Argument of type 'number' is not assignable to type 'string'
