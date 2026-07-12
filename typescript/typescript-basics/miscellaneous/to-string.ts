// =========================
// Example 1: Number to String
// =========================
let age: number = 25;
let ageAsString: string = age.toString();

console.log("Original value:", age);                // 25
console.log("Original type:", typeof age);          // number
console.log("Converted value:", ageAsString);       // "25"
console.log("Converted type:", typeof ageAsString); // string

// Try with another number
let pi: number = 3.14159;
console.log("Pi as string:", pi.toString()); // "3.14159"

console.log("-----------");


// =========================
// Example 2: Boolean to String
// =========================
let isStudent: boolean = true;
let isStudentAsString: string = isStudent.toString();

console.log("Original value:", isStudent);                // true
console.log("Original type:", typeof isStudent);          // boolean
console.log("Converted value:", isStudentAsString);       // "true"
console.log("Converted type:", typeof isStudentAsString); // string

// Try with false
let hasLicense: boolean = false;
console.log("Has License as string:", hasLicense.toString()); // "false"

console.log("-----------");


// =========================
// Example 3: Array to String
// =========================
let fruits: string[] = ["Apple", "Mango", "Banana"];
let fruitsAsString: string = fruits.toString();

console.log("Original array:", fruits);            // [ 'Apple', 'Mango', 'Banana' ]
console.log("Array as string:", fruitsAsString);   // "Apple,Mango,Banana"

// Using join() with different separators
console.log("Fruits joined with - :", fruits.join(" - ")); // "Apple - Mango - Banana"
console.log("Fruits joined with | :", fruits.join(" | ")); // "Apple | Mango | Banana"

console.log("-----------");


// =========================
// Example 4: Object to String
// =========================
let student = { name: "Krishna", age: 20 };

console.log("Using toString():", student.toString()); 
// [object Object] -> default object representation

console.log("Using JSON.stringify():", JSON.stringify(student)); 
// {"name":"Krishna","age":20} -> readable as a proper string

console.log("-----------");


// =========================
// Example 5: Date to String
// =========================
let today: Date = new Date();

console.log("Date using toString():", today.toString());  
// Example: "Mon Sep 01 2025 20:30:00 GMT+0530 (India Standard Time)"

// Try other formats
console.log("Date using toDateString():", today.toDateString());  
// "Mon Sep 01 2025" -> only date part

console.log("Date using toISOString():", today.toISOString());  
// "2025-09-01T15:00:00.000Z" -> ISO format (useful in APIs)

console.log("-----------");


// =========================
// Example 6: Null and Undefined
// =========================
// Note: null and undefined do NOT have a toString method directly
// If you try: null.toString() or undefined.toString(), it will throw an error.

let nothing: any = null;
let notDefined: any = undefined;

// Safe conversion using String() function
console.log("Null as string:", String(nothing));       // "null"
console.log("Undefined as string:", String(notDefined)); // "undefined"
