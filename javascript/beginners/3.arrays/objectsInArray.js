const employees = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 28 }
];

console.log('All employees');
console.log(employees);

// Accessing Bob's age
console.log(`\nBob's age : ${employees[1].age}`);

console.log('\nAdding a new employee');
employees.push({ id: 4, name: "David", age: 35 });
console.log('All employees')
console.log(employees);


