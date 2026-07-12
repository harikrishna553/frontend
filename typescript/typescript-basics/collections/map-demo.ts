// ------------------------------
// 1. COUNTRY CAPITALS DEMO
// ------------------------------
let countryCapitals = new Map<string, string>([
  ["India", "New Delhi"],
  ["Japan", "Tokyo"],
  ["Canada", "Ottawa"]
]);

console.log("Japan's capital:", countryCapitals.get("Japan")); // Tokyo
console.log("India's capital:", countryCapitals.get("India")); // New Delhi

console.log("Brazil's capital:", countryCapitals.get("Brazil")); // undefined

countryCapitals.set("Brazil", "Brasília");
countryCapitals.set("India", "New Delhi (updated)");

console.log("Total countries:", countryCapitals.size); // 4

console.log("Has Canada?", countryCapitals.has("Canada")); // true
console.log("Has Germany?", countryCapitals.has("Germany")); // false

// Delete one entry
countryCapitals.delete("Japan");
console.log("After deleting Japan:", countryCapitals);

// ------------------------------
// 2. FRUITS DEMO
// ------------------------------
let fruits = new Map<string, number>([
  ["Apple", 50],
  ["Banana", 30],
  ["Mango", 40],
  ["Orange", 60]
]);

console.log("\n--- Fruit Prices ---");
for (let [fruit, price] of fruits) {
  console.log(`${fruit} costs ${price} rupees.`);
}

// Filter expensive fruits (price > 40)
let expensiveFruits = new Map(
  Array.from(fruits).filter(([_, price]) => price > 40)
);
console.log("\nExpensive fruits:", expensiveFruits);

// Sort fruits by price
let sortedFruits = new Map(
  Array.from(fruits).sort((a, b) => a[1] - b[1])
);
console.log("\nFruits sorted by price:", sortedFruits);

// ------------------------------
// 3. STUDENT SCORES DEMO
// ------------------------------
let studentScores = new Map<string, number>([
  ["John", 92],
  ["Bob", 80],
  ["Ahmed", 90],
  ["Sara", 85]
]);

console.log("\n--- Student Scores ---");
for (let [name, score] of studentScores) {
  console.log(`${name} → ${score}`);
}

// Get top scorer
let topStudent = Array.from(studentScores.entries()).reduce((a, b) =>
  a[1] > b[1] ? a : b
);
console.log(`\nTop student: ${topStudent[0]} with score ${topStudent[1]}`);

// Average score
let avgScore =
  Array.from(studentScores.values()).reduce((sum, v) => sum + v, 0) /
  studentScores.size;
console.log(`Average score: ${avgScore.toFixed(2)}`);

// ------------------------------
// 4. CONVERSIONS
// ------------------------------
let studentObj = Object.fromEntries(studentScores);
console.log("\nMap to Object:", studentObj);

let newMap = new Map(Object.entries(studentObj));
console.log("Object back to Map:", newMap);

// ------------------------------
// 5. NESTED MAPS
// ------------------------------
let departments = new Map<string, Map<string, number>>([
  ["Engineering", new Map([["Alice", 90], ["Eve", 88]])],
  ["Science", new Map([["Tom", 76], ["Jerry", 82]])],
]);

console.log("\n--- Department Scores ---");
for (let [dept, students] of departments) {
  console.log(dept + ":");
  for (let [student, score] of students) {
    console.log(`   ${student} → ${score}`);
  }
}

// ------------------------------
// 6. WEAKMAP DEMO (special case)
// ------------------------------
let weakMap = new WeakMap<object, string>();
let obj1 = {};
weakMap.set(obj1, "secret value");
console.log("\nWeakMap example: object mapped to secret value");
