// Define the interface for student names (numeric index)
interface StudentNames {
  [index: number]: string;
}

// Create the array using the interface
let students: StudentNames = ["Krishna", "Lahari", "Ram"];

// Loop using actual length (hardcoded)
console.log("List of Students:");
for (let i = 0; i < 3; i++) {
  console.log(`Student ${i + 1}: ${students[i]}`);
}

// Define the interface for student scores (string index)
interface StudentScores {
  [name: string]: number;
}

// Create a score object
let scores: StudentScores = {
  "Krishna": 85,
  "Lahari": 90,
  "Ram": 78,
};

// Print each student's score
console.log("\nStudent Scores:");
for (let i = 0; i < 3; i++) {
  const name = students[i];
  const score = scores[name];
  console.log(`${name}: ${score} marks`);
}
