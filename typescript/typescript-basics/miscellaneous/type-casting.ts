// -------------------------
// Example 1: String to Number
// -------------------------
let input: string = "10";  // imagine this came from user or API
console.log("Input is:", input, "| Type:", typeof input);   // "10" | string

let result = input + 3;
console.log("Without casting (string + number):", result, "| Type:", typeof result);  
// "103" | string (string concatenation)

let num: number = parseInt(input);
console.log("With parseInt casting:", num + 3, "| Type:", typeof num);  
// 13 | number

console.log("------------------------------------");

// -------------------------
// Example 2: Decimal Conversion
// -------------------------
input = "20.5";
num = parseFloat(input);

console.log("Input is:", input, "| Type:", typeof input);  // "20.5" | string
console.log("After parseFloat:", num, "| Type:", typeof num); // 20.5 | number
console.log("After adding 3:", num + 3);  // 23.5

console.log("------------------------------------");

// -------------------------
// Example 3: Number to String
// -------------------------
let age: number = 25;
let text: string = age.toString();

console.log("Age as number:", age, "| Type:", typeof age);   // 25 | number
console.log("Age as string:", text, "| Type:", typeof text); // "25" | string
console.log("Sentence:", "I am " + text + " years old."); 

console.log("------------------------------------");

// -------------------------
// Example 4: Boolean to String
// -------------------------
let isAdmin: boolean = true;
let isAdminStr: string = isAdmin.toString();

console.log("isAdmin as boolean:", isAdmin, "| Type:", typeof isAdmin); // true | boolean
console.log("isAdmin as string:", isAdminStr, "| Type:", typeof isAdminStr); // "true" | string
console.log("Admin status:", isAdminStr);

console.log("------------------------------------");

// -------------------------
// Example 5: String to Boolean
// -------------------------
input = "TRUE"; // try also "false", "yes", "no"
let flag: boolean = (input.toLowerCase() === "true");

console.log("Input is:", input, "| Type:", typeof input);  // "TRUE" | string
console.log("Converted boolean:", flag, "| Type:", typeof flag); // true | boolean

console.log("------------------------------------");

// -------------------------
// Example 6: Checking Types Explicitly
// -------------------------
let val: string = "42";
console.log("val:", val, "| Type:", typeof val);         // "42" | string

let numVal: number = parseInt(val);
console.log("numVal:", numVal, "| Type:", typeof numVal); // 42 | number

console.log("------------------------------------");

// -------------------------
// Example 7: Edge Cases
// -------------------------
let invalidNum: string = "abc";
let convertedNum: number = parseInt(invalidNum);

console.log("Invalid input:", invalidNum);        // "abc"
console.log("After parseInt:", convertedNum);     // NaN (Not a Number)
console.log("Type of convertedNum:", typeof convertedNum); // number (but value is NaN!)

console.log("------------------------------------");

// -------------------------
// Example 8: Real-World Mini Demo (API-like Response)
// -------------------------
let apiResponse = {
    id: "101",           // should be number
    price: "99.99",      // should be float
    isActive: "true"     // should be boolean
};

let id: number = parseInt(apiResponse.id);
let price: number = parseFloat(apiResponse.price);
let active: boolean = (apiResponse.isActive === "true");

console.log("API Response (raw):", apiResponse);
console.log("Converted types -> id:", id, "| price:", price, "| isActive:", active);
