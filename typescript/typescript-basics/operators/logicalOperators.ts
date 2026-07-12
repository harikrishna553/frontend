// === Section 1: Basic Logical Operators ===
console.log("=== Logical AND (&&), OR (||), NOT (!) ===");

console.log("(10 > 20) && (20 > 5):", (10 > 20) && (20 > 5));  // false && true => false
console.log("(10 > 20) || (20 > 5):", (10 > 20) || (20 > 5));  // false || true => true
console.log("(4 > 5) || (3 > 4):", (4 > 5) || (3 > 4));        // false || false => false
console.log("!(10 > 20 || 20 > 5):", !(10 > 20 || 20 > 5));    // !(false || true) => false

// === Section 2: Real-world Scenario - Login and Admin ===
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log("\n=== User Access Check ===");

console.log("User is logged in AND is admin:", isLoggedIn && isAdmin);  // true && false => false
console.log("User is logged in OR is admin:", isLoggedIn || isAdmin);   // true || false => true
console.log("User is NOT logged in:", !isLoggedIn);                     // !true => false

// === Section 3: Conditional Access Logic ===
console.log("\n=== Access Logic Example ===");

if (isLoggedIn && isAdmin) {
  console.log("Welcome, Admin!");
} else if (isLoggedIn) {
  console.log("Welcome, regular user.");
} else {
  console.log("Please log in to continue.");
}
