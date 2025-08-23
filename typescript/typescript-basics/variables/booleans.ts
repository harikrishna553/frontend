// Example 1: Defining boolean variables
let b1: boolean = true;
let b2: boolean = false;

console.log(b1); // true
console.log(b2); // false

let isLoggedIn: boolean = true;
if (isLoggedIn) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in first.");
}

let number: number = 5;
let isPositive: boolean = number > 0;
console.log(isPositive); // true

let hasAcceptedTerms: boolean = false;
if (!hasAcceptedTerms) {
    console.log("You must accept the terms and conditions before continuing.");
}

let isDarkModeEnabled: boolean = true;
if (isDarkModeEnabled) {
    console.log("Dark mode is ON.");
} else {
    console.log("Dark mode is OFF.");
}
