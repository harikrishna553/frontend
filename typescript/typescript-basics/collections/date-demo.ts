// ------------------------------
// 1. CURRENT & SPECIFIC DATES
// ------------------------------
let currentDate: Date = new Date();
console.log("Current Date:", currentDate);

let projectDeadline: Date = new Date(2024, 10, 15); 
console.log("Project Deadline:", projectDeadline);

let birthday: Date = new Date("2000-05-10"); 
console.log("Birthday:", birthday);

let meetingDate: Date = new Date("2025-09-09T14:30:00");

// ------------------------------
// 2. GET PARTS OF DATE
// ------------------------------
console.log("\n--- Meeting Date Parts ---");
console.log("Year:", meetingDate.getFullYear()); 
console.log("Month:", meetingDate.getMonth());   
console.log("Date:", meetingDate.getDate());     
console.log("Day of week:", meetingDate.getDay()); 
console.log("Hours:", meetingDate.getHours());   
console.log("Minutes:", meetingDate.getMinutes()); 
console.log("Seconds:", meetingDate.getSeconds()); 

// ------------------------------
// 3. MODIFYING A DATE
// ------------------------------
let releaseDate: Date = new Date("2025-01-01");
console.log("\nOriginal Release Date:", releaseDate);

releaseDate.setFullYear(2030);
releaseDate.setMonth(2);   // March
releaseDate.setDate(15);   // 15th
releaseDate.setHours(10, 45, 0); // 10:45:00

console.log("Updated Release Date:", releaseDate);

// ------------------------------
// 4. FORMATTING DATES
// ------------------------------
let now: Date = new Date();

console.log("\n--- Formatting ---");
console.log("Default:", now.toString());
console.log("Date only:", now.toDateString());
console.log("Time only:", now.toTimeString());
console.log("ISO format:", now.toISOString());
console.log("Locale (India):", now.toLocaleString("en-IN"));
console.log("Locale (US):", now.toLocaleString("en-US"));

// Using Intl.DateTimeFormat
let formatter = new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "short" });
console.log("Formatted (UK):", formatter.format(now));

// ------------------------------
// 5. CALCULATE AGE
// ------------------------------
function calculateAge(birthdate: Date): number {
  let today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();

  let hasHadBirthday =
    today.getMonth() > birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

  if (!hasHadBirthday) age--;
  return age;
}
console.log("\nAge:", calculateAge(new Date("1995-09-10")));

// ------------------------------
// 6. DATE ARITHMETIC
// ------------------------------
function addDays(date: Date, days: number): Date {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

let today = new Date();
console.log("\nToday:", today);
console.log("10 days later:", addDays(today, 10));
console.log("30 days earlier:", addDays(today, -30));

// ------------------------------
// 7. COMPARING & DIFFERENCE
// ------------------------------
let examDate = new Date("2025-12-01");
console.log("\nIs exam in future?", examDate > today);
console.log("Is deadline passed?", projectDeadline < today);

// Difference in days
function dateDiffInDays(d1: Date, d2: Date): number {
  let diff = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log("Days until exam:", dateDiffInDays(today, examDate));

// ------------------------------
// 8. SORTING DATES
// ------------------------------
let events = [
  new Date("2025-11-15"),
  new Date("2025-01-20"),
  new Date("2025-08-05")
];

events.sort((a, b) => a.getTime() - b.getTime());
console.log("\nSorted Events:", events);

// ------------------------------
// 9. COUNTDOWN EXAMPLE
// ------------------------------
function countdownTo(date: Date) {
  let now = new Date().getTime();
  let diff = date.getTime() - now;

  if (diff <= 0) {
    console.log("The event has started or passed!");
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
}

console.log("\n--- Countdown to New Year 2026 ---");
countdownTo(new Date("2026-01-01T00:00:00"));
