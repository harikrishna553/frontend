// 1. Array of student names - strictly strings
let studentNames: string[] = ["Ram", "Krishna", "Chamu"];
studentNames.push("Gopi"); // OK
// studentNames.push(123);  // Error: number not allowed

// 2. Array of student scores - strictly numbers
let studentScores: number[] = [85, 92, 78];
studentScores.push(88); // OK
// studentScores.push("90"); // Error: string not allowed

// 3. Array of enrollment status - strictly booleans
let enrollmentStatus: boolean[] = [true, true, false];
enrollmentStatus.push(true); // OK
// enrollmentStatus.push("yes"); // Error: string not allowed

// 4. Array of mixed data for admin dashboard (Name + ID)
let studentData: (string | number)[] = ["Ram", 101, "Krishna", 102];
studentData.push("Chamu");
studentData.push(103);
// studentData.push(true); // Error: boolean not allowed

// 5. Array using 'any' type — not recommended unless necessary
let logs: any[] = ["System Start", 200, true, null];
logs.push("New student added");
logs.push({ name: "Sailu", score: 95 }); // Also allowed!

// 6. Display all student information using a for loop
for (let i = 0; i < studentNames.length; i++) {
  console.log("Student:");
  console.log("  Name:", studentNames[i]);
  console.log("  Score:", studentScores[i]);
  console.log("  Enrolled:", enrollmentStatus[i] ? "Yes" : "No");
}

// 7. Display all entries in the mixed data array
console.log("\nMixed student data (name + ID):");
for (let i = 0; i < studentData.length; i++) {
  console.log("  ->", studentData[i]);
}

// 8. Show full system log using 'any[]'
console.log("\nSystem Logs:");
for (let log of logs) {
  console.log("  -", log);
}
