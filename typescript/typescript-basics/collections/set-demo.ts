// ------------------------------
// 1. BASIC SET DEMO
// ------------------------------
let uniqueNumbers = new Set<number>();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); // duplicate ignored

console.log("Unique Numbers:", uniqueNumbers); 
// Output: Set(3) { 10, 20, 30 }

// ------------------------------
// 2. FRUITS DEMO
// ------------------------------
let fruits = new Set<string>();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");

console.log("\nFruits:", fruits); // Set { "Apple", "Banana", "Mango" }
console.log("Total fruits:", fruits.size); // 3

fruits.delete("Banana");
console.log("After deleting Banana:", fruits);

fruits.clear();
console.log("After clearing:", fruits); // Set(0) {}

// ------------------------------
// 3. CHECKING MEMBERSHIP
// ------------------------------
let languages = new Set(["TypeScript", "Python", "Java"]);

console.log("\nHas Python?", languages.has("Python")); // true
console.log("Has Go?", languages.has("Go"));           // false

console.log("\nIterating languages with forEach:");
languages.forEach(lang => console.log("Language:", lang));

console.log("\nIterating languages with for-of:");
for (let lang of languages) {
  console.log("Language:", lang);
}

let iterator = languages.values();
console.log("\nIterator values:");
console.log(iterator.next().value); // TypeScript
console.log(iterator.next().value); // Python

// ------------------------------
// 4. REMOVE DUPLICATES FROM ARRAY
// ------------------------------
let numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = Array.from(new Set(numbersWithDuplicates));
console.log("\nUnique Array:", uniqueArray); // [1, 2, 3, 4, 5]

// ------------------------------
// 5. SET OPERATIONS (Union, Intersection, Difference)
// ------------------------------
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

let union = new Set([...setA, ...setB]);
console.log("\nUnion:", union); // {1,2,3,4,5,6}

let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection); // {3,4}

let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", difference); // {1,2}

// ------------------------------
// 6. SORTING A SET
// ------------------------------
let unsortedSet = new Set([30, 10, 50, 20, 40]);
let sortedArray = Array.from(unsortedSet).sort((a, b) => a - b);
console.log("\nSorted Set as Array:", sortedArray);

// ------------------------------
// 7. REAL-WORLD EXAMPLES
// ------------------------------
// Unique student roll numbers
let rollNumbers = new Set<number>([101, 102, 103, 101, 104]);
console.log("\nUnique Roll Numbers:", rollNumbers);

// Tags system
let tags = new Set<string>();
tags.add("Technology").add("Programming").add("JavaScript").add("Technology");
console.log("Unique Tags:", tags);

// ------------------------------
// 8. WEAKSET DEMO (special case)
// ------------------------------
let weakSet = new WeakSet<object>();
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log("\nWeakSet example (cannot print directly):");
console.log("Has obj1?", weakSet.has(obj1)); // true
