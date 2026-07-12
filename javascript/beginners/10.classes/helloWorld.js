class Employee {

  // Constructor method
  constructor(name, age) {
    this.name = name; // Assigns the name property
    this.age = age;   // Assigns the age property
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Creating an instance of the class
const emp1 = new Employee('Krishna', 35);

// Accessing methods
emp1.greet(); 