function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

try {
  let x = 10;
  let y = "5";
  console.log(addNumbers(x, y)); // This will throw an error
} catch (error) {
  console.error(error.message);
}

