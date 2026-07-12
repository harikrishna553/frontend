const person = {
  name: "Alice",
  age: 25,
  isStudent: false,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(`name: ${person.name}`);
console.log(`age: ${person.age}`);
console.log(`isStudent: ${person.isStudent}`);
person.greet();