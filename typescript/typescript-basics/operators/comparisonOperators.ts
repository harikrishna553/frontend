// SECTION 1: Value comparison
let value: number = 30;

console.log("=== Value Comparison ===");
console.log("Is value === 30? ", value === 30);       // true
console.log("Is value !== 30? ", value !== 30);       // false
console.log("Is value > 20? ", value > 20);           // true
console.log("Is value < 40? ", value < 40);           // true
console.log("Is value >= 30? ", value >= 30);         // true
console.log("Is value <= 25? ", value <= 25);         // false

// SECTION 2: Comparing two numbers
let firstNumber: number = 40;
let secondNumber: number = 30;

console.log("\n=== Number Comparison ===");
console.log("Is firstNumber > secondNumber? ", firstNumber > secondNumber);   // true
console.log("Is firstNumber < secondNumber? ", firstNumber < secondNumber);   // false
console.log("Is firstNumber === secondNumber? ", firstNumber === secondNumber); // false

// SECTION 3: Password validation logic
function validatePassword(entered: string, actual: string, caseSensitive: boolean = true): void {
  let isMatch: boolean;

  if (caseSensitive) {
    isMatch = (entered === actual);
  } else {
    isMatch = (entered.toLowerCase() === actual.toLowerCase());
  }

  console.log("\n=== Password Check ===");
  if (isMatch) {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password.");
  }
}

// Example usage
const userInputPassword: string = "1234";
const storedPassword: string = "1234";

validatePassword(userInputPassword, storedPassword);             // Case-sensitive match
validatePassword("1234", "1234");                                // Also a match
validatePassword("PASSWORD", "password", false);                 // Case-insensitive match
validatePassword("PASSWORD", "password", true);                  // Case-sensitive mismatch
