// === Section 1: Basic Ternary Syntax ===
let age: number = 18;

console.log("=== Basic Ternary Example ===");
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(`Age: ${age} → ${eligibility}`);  // "Eligible to vote"

// Same logic with if...else (for comparison)
if (age >= 18) {
  console.log("Eligible to vote (using if...else)");
} else {
  console.log("Not eligible to vote (using if...else)");
}

// === Section 2: Login and Admin Access Example ===
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log("\n=== Ternary in Real-World Scenario ===");
let accessMessage = isLoggedIn
  ? (isAdmin ? "Welcome, Admin!" : "Welcome, user.")
  : "Access denied. Please log in.";

console.log(accessMessage);

// === Section 3: Status-Based Example ===
let score: number = 85;

console.log("\n=== Score Evaluation with Ternary ===");
let grade = score >= 90
  ? "A"
  : score >= 80
    ? "B"
    : score >= 70
      ? "C"
      : score >= 60
        ? "D"
        : "F";

console.log(`Score: ${score} → Grade: ${grade}`);

// === Section 4: Boolean to String Example ===
let hasAccess: boolean = true;
let message = hasAccess ? "Access granted" : "Access denied";
console.log("\n=== Boolean to Message ===");
console.log(`hasAccess = ${hasAccess} → ${message}`);
