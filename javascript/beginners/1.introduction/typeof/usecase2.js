function processInput(input) {
  if (typeof input === "string") {
    console.log("Processing string...");
  } else if (typeof input === "number") {
    console.log("Processing number...");
  } else if (typeof input === "boolean") {
    console.log("Processing boolean...");
  } else if (typeof input === "undefined") {
    console.log("Processing undefined...");
  } else if (typeof input === "object") {
    if (input === null) {
      console.log("Processing null...");
    } else if (Array.isArray(input)) {
      console.log("Processing array...");
    } else {
      console.log("Processing object...");
    }
  } else if (typeof input === "function") {
    console.log("Processing function...");
  } else if (typeof input === "symbol") {
    console.log("Processing symbol...");
  } else if (typeof input === "bigint") {
    console.log("Processing bigint...");
  } else {
    console.log("Unsupported type");
  }
}

// Test cases
processInput(42);                   // Output: Processing number...
processInput("Hello");              // Output: Processing string...
processInput(true);                 // Output: Processing boolean...
processInput(undefined);            // Output: Processing undefined...
processInput(null);                 // Output: Processing null...
processInput({ name: "Alice" });    // Output: Processing object...
processInput([1, 2, 3]);            // Output: Processing array...
processInput(function() {});        // Output: Processing function...
processInput(Symbol("unique"));     // Output: Processing symbol...
processInput(12345678901234567890n);// Output: Processing bigint...

