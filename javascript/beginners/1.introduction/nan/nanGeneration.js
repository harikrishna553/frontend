// Example 1: Division by Zero (when zero is the numerator)
let result = 0 / 0;
console.log(`0 / 0 : ${result}`);

// Example 2: Square Root of a Negative Number
result = Math.sqrt(-1);
console.log(`Math.sqrt(-1) : ${result}`);

// Example 3: Logarithm of a Negative Number
result = Math.log(-1);
console.log(`Math.log(-1) : ${result}`);

// Example 4: Indeterminate Forms
result = Infinity - Infinity;
console.log(`Infinity - Infinity : ${result}`);

// Example 5: Attempting to Multiply a String That Cannot Be Converted to a Number
result = "hello" * 3;
console.log(`"hello" * 3 : ${result}`);

// Example 6: Attempting to Divide a Non-Numeric String
result = "hello" / 2;
console.log(`"hello" / 2 : ${result}`);

// Example 7: Attempting to Subtract a Non-Numeric String
result = "hello" - 5;
console.log(`"hello" - 5 : ${result}`);

// Example 8: Parsing a Non-Numeric String with parseInt
result = parseInt("abc");
console.log(`parseInt("abc") : ${result}`);

// Example 9: Parsing a Non-Numeric String with parseFloat
result = parseFloat("abc");
console.log(`parseFloat("abc") : ${result}`);

// Example 10: Parsing a String That Begins with Non-Numeric Characters
result = parseInt("abc123");
console.log(`parseInt("abc123") : ${result}`);

// Example 11: Exponentiation with Invalid Bases
result = Math.pow(-1, 0.5);
console.log(`Math.pow(-1, 0.5) : ${result}`);

// Example 12: Trigonometric Functions with Invalid Arguments
result = Math.acos(2);  // The range of acos is [-1, 1]
console.log(`Math.acos(2) : ${result}`);

// Example 13: Multiplying an Undefined Variable
let a;
result = a * 2;
console.log(`undefined variable * 2 : ${result}`);

// Example 14: Implicit Coercion to NaN (undefined + number)
result = undefined + 1;
console.log(`undefined + 1 : ${result}`);

// Example 15: Implicit Coercion to NaN (null * string)
result = null * "a";
console.log(`null * "a" : ${result}`);

