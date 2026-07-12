// Import default export (no curly brackets needed)
import isEven from "./math-utils";

// Import named export (must use curly brackets)
import { isOdd } from "./math-utils";

console.log(isEven(10)); // true
console.log(isOdd(7));   // true
