let score = 85;

console.log(`Score: ${score}`);

if (score >= 90) {
  console.log("Grade: A");
} else {
  if (score >= 80) {
    console.log("Grade: B");
  } else {
    if (score >= 70) {
      console.log("Grade: C");
    } else {
      console.log("Grade: D or below");
    }
  }
}
