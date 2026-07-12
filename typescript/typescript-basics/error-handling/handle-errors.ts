function safeCheckAge(age: number): void {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18 years old.");
    }
    console.log("Access granted!");
  } catch (err) {
    console.log("Error:", (err as Error).message);
  }
}

safeCheckAge(20); // Access granted!
safeCheckAge(15); // Error: You must be at least 18 years old.
