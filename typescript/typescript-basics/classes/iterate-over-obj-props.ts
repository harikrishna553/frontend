// Define a student object
let student = {
  firstName: "Krishna",
  lastName: "Sharma",
  rollNumber: 102,
  age: 20,
  course: "Computer Science",
  
  // Method 1
  displayDetails: function () {
    console.log(`${this.firstName} ${this.lastName} - Roll No: ${this.rollNumber}`);
  },

  // Method 2
  greet: function () {
    console.log("Welcome to the course!");
  }
};

// -------------------------------
// 1. Display all keys and values
// -------------------------------
console.log("All Properties (including functions):");

for (let key in student) {
  console.log(`${key} : ${student[key]}`);
}

/*
Output:
firstName : Krishna
lastName : Sharma
rollNumber : 102
age : 20
course : Computer Science
displayDetails : function () {...}
greet : function () {...}
*/


// ------------------------------------------
// 2. Skip function by specific property name
// ------------------------------------------
console.log("\nProperties only (skip 'displayDetails' & 'greet') [Manual Check]:");

for (let key in student) {
  if (key !== 'displayDetails' && key !== 'greet') {
    console.log(`${key} : ${student[key]}`);
  }
}

// ----------------------------------------------
// 3. Skip all function properties using instanceof
// ----------------------------------------------
console.log("\nProperties only (skip all functions using instanceof):");

for (let key in student) {
  if (student[key] instanceof Function) {
    continue; // Skip this property if it's a function
  }
  console.log(`${key} : ${student[key]}`);
}

/*
Output:
firstName : Krishna
lastName : Sharma
rollNumber : 102
age : 20
course : Computer Science
*/


// ---------------------------------------------------
// 4. Using typeof to skip functions (alternative method)
// ---------------------------------------------------
console.log("\nProperties only (using typeof check):");

for (let key in student) {
  if (typeof student[key] === 'function') {
    continue; // Skip function properties
  }
  console.log(`${key} : ${student[key]}`);
}
