function greet() {
  if (true) {
    let name = "Harini";
    console.log("Inside block:", name);
  }
  console.log("Outside block:", name); // Error: Cannot find name 'name'
}

greet();
