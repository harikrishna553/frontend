let a = NaN;
let b = NaN;

console.log(a == b);   // false
console.log(a === b);  // false

// Correct way to check for NaN
console.log(Number.isNaN(a));  // true

