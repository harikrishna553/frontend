class CustomError extends Error {
  constructor(message: string) {
    super(message); // call parent Error constructor
    this.name = "CustomError"; // set the error name
  }
}

// Function that throws our custom error
function riskyOperation() {
  throw new CustomError("Something went wrong in riskyOperation!");
}

// Using try-catch to handle it
try {
  riskyOperation();
} catch (err) {
  if (err instanceof CustomError) {
    console.log("Caught a custom error:", err.message);
  } else {
    console.log("Caught some other error:", err);
  }
}
