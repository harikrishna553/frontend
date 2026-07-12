function greet() {
  if (true) {
    var name = "Krishna";
    console.log("Inside block:", name);
  }
  console.log("Outside block:", name); // Still accessible
}

greet();