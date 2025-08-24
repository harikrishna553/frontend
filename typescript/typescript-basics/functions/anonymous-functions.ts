// Function to process user with a callback
function processUser(callback: (name: string) => void) {
  const userName = "Arjun";
  callback(userName);
}

// Say hello
processUser(function(name: string) {
  console.log("Hello " + name + "!");
});

// Say goodbye
processUser(function(name: string) {
  console.log("Goodbye " + name + "!");
});

// anonymous functions to modify or transform data before printing.
processUser(function(name: string) {
  const upperCaseName = name.toUpperCase();
  console.log("User in uppercase: " + upperCaseName);
});

processUser(function(name: string) {
  if (name.startsWith("A")) {
    console.log("Name starts with A: " + name);
  } else {
    console.log("Name does not start with A");
  }
});

