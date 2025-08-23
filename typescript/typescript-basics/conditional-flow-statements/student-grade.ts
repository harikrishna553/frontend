let score: number = 85;  // You can change this value to test different outputs
let grade: string;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score >= 50 && score < 60) {
    grade = "E";
} else if (score >= 0 && score < 50) {
    grade = "F (Fail)";
} else {
    grade = "Invalid score. Please enter a value between 0 and 100.";
}

console.log(`Student Score: ${score}`);
console.log(`Grade: ${grade}`);
