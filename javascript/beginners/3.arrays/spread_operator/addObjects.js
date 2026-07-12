const emps = [
  {
    id: 1,
    name: "Krishna",
    age: 36,
  },
  {
    id: 2,
    name: "Ram",
    age: 37,
  },
];

const updatedEmps = [...emps, { id: 3, name: "Gopi", age: 39 }];

console.log(`Employees: ${JSON.stringify(emps)}`);
console.log("\nAdd new Employee to the end of employees object");
console.log(`Employees: ${JSON.stringify(updatedEmps)}`);
