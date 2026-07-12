const person = new Object();

// Attach properties to the person object
person.name = "Alice";
person.age = 25;
person.isStudent = false;

// Attach functon to the person object
person.greet = function() {
  console.log("Hello, my name is " + this.name);
};

console.log(`name: ${person.name}`);
console.log(`age: ${person.age}`);
console.log(`isStudent: ${person.isStudent}`);
person.greet();