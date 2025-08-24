// ===============================
// 1. Basic Destructuring
// ===============================
let courses = ["Angular", "React", "ES6"];

let [firstCourse, secondCourse, thirdCourse] = courses;
console.log("Basic Destructuring:");
console.log("First:", firstCourse);   // Angular
console.log("Second:", secondCourse); // React
console.log("Third:", thirdCourse);   // ES6

// ===============================
// 2. Destructuring Fewer Elements
// ===============================
let colors = ["Red", "Green", "Blue"];
let [primary, secondary] = colors;

console.log("\nDestructuring Fewer Elements:");
console.log("Primary:", primary);     // Red
console.log("Secondary:", secondary); // Green

// ===============================
// 3. Skipping Elements
// ===============================
let languages = ["Python", "C++", "Java"];
let [firstLang, , thirdLang] = languages;

console.log("\nSkipping Elements:");
console.log("First:", firstLang);   // Python
console.log("Third:", thirdLang);   // Java

// ===============================
// 4. Default Values
// ===============================
let names = ["Alice"];
let [name1 = "Default1", name2 = "Default2", name3 = "Default3"] = names;

console.log("\nDefault Values:");
console.log("Name1:", name1); // Alice
console.log("Name2:", name2); // Default2
console.log("Name3:", name3); // Default3

// ===============================
// 5. Using the Rest Operator
// ===============================
let tools = ["Hammer", "Screwdriver", "Wrench", "Drill"];
let [mainTool, ...otherTools] = tools;

console.log("\nRest Operator:");
console.log("Main Tool:", mainTool);         // Hammer
console.log("Other Tools:", otherTools);     // [ 'Screwdriver', 'Wrench', 'Drill' ]

// ===============================
// 6. Destructuring in Function Parameters
// ===============================
function printTopLanguages([lang1, lang2]: string[]) {
  console.log("\nTop 2 Languages from Function:");
  console.log("1:", lang1);
  console.log("2:", lang2);
}

printTopLanguages(["TypeScript", "JavaScript", "Python"]);

// ===============================
// 7. Tuple Destructuring with Types
// ===============================
let userTuple: [number, string] = [101, "Alice"];
let [userId, userName] = userTuple;

console.log("\nTuple Destructuring with Types:");
console.log("User ID:", userId);     // 101
console.log("User Name:", userName); // Alice