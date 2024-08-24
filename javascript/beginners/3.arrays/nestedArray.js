// Nested array representing a collection of employees
const employees = [
    [1, "Alice", 30],    // Employee 1: [id, name, age]
    [2, "Bob", 25],      // Employee 2: [id, name, age]
    [3, "Charlie", 28]   // Employee 3: [id, name, age]
];

// Accessing the nested arrays
console.log('All employees are');
console.log(employees)

// Accessing specific employee details
console.log(`\nFirst Employee in the array ${employees[0]}`);      
console.log(`Second Employee name ${employees[1][1]}`); 
console.log(`Third Employee Age ${employees[2][2]}`);

// Add new employee to the nested array
// Adding a new employee to the array
employees.push([4, "David", 35]);
console.log('\nAll employees are');
console.log(employees)

// Updating Alice Age to 45
employees[0][2] = 45;
console.log('\nUpdated Alice Age to 45')
console.log(`Alice Details : ${employees[0]}`);  // Prints: [3, "Charlie", 29]

// Remove first employee Alice from the collection
console.log('\nRemove first employee Alice from the collection')
employees.shift();
console.log('All employees are');
console.log(employees)

