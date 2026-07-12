function riskyOperation() {
  const random = Math.random();

  if (random < 0.5) {
    throw new RangeError("The number is out of range!");
  } else {
    throw new TypeError("Invalid type used!");
  }
}

try {
  riskyOperation();
} catch (error) {
  if (error instanceof RangeError) {
    console.error("RangeError handled:", error.message);
  } else if (error instanceof TypeError) {
    console.error("TypeError handled:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}
