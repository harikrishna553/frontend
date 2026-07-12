function checkAge(age: number): void {
  if (age < 18) {
    throw new Error("You must be at least 18 years old.");
  }
  console.log("Access granted!");
}

checkAge(20); // Prints: Access granted!
checkAge(15); // Throws error: "You must be at least 18 years old."
