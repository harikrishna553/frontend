const emps = [
  { id: 1, name: "Krishna", age: 36 },
  { id: 2, name: "Ram", age: 39 },
  { id: 3, name: "Gopi", age: 42 },
  { id: 4, name: "Sailu", age: 37 },
];

const empsWithAgeLessThan40 = emps.filter((emp) => emp.age < 40);

console.log(`emps : ${JSON.stringify(emps)}`);
console.log(`\nempsWithAgeLessThan40 : ${JSON.stringify(empsWithAgeLessThan40)}`);
