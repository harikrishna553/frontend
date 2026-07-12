// Declare a constant string
const s2: string = "My name is Krishna";

// ------------------------
// String Properties & Methods
// ------------------------

// 1. Length of the string
console.log("Length of string:", s2.length); // 18

// 2. Characters at specific positions
console.log("Character at index 0:", s2.charAt(0)); // M
console.log("Character at index 3:", s2.charAt(3)); // a

// 3. Finding indexes of characters/substrings
console.log("Index of 'm':", s2.indexOf('m')); // 5
console.log("Index of 'name':", s2.indexOf('name')); // 3

// 4. Last index of a character
console.log("Last index of 'n':", s2.lastIndexOf('n')); // 12

// 5. Checking how a string starts and ends
console.log("Starts with 'My':", s2.startsWith("My")); // true
console.log("Ends with 'Krishna':", s2.endsWith("Krishna")); // true
console.log("Ends with 'mina':", s2.endsWith("mina")); // false (case-sensitive)

// 6. Splitting the string into words
console.log("Split by spaces:", s2.split(" ")); // ["My", "name", "is", "Krishna"]

// 7. Extracting parts of the string using substring
console.log("Substring from index 3 to 7:", s2.substring(3, 7)); // "name"
console.log("Substring from index 11 to end:", s2.substring(11)); // "Krishna"

// 8. Changing case
console.log("Uppercase version:", s2.toUpperCase()); // "MY NAME IS KRISHNA"
console.log("Lowercase version:", s2.toLowerCase()); // "my name is krishna"

// ------------------------
// Additional String Methods
// ------------------------

// 9. Includes - check if the string contains a word or character
console.log("Includes 'name':", s2.includes("name")); // true
console.log("Includes 'hello':", s2.includes("hello")); // false

// 10. Replace - replace part of the string with something else
console.log("Replace 'Krishna' with 'Rama':", s2.replace("Krishna", "Rama")); // "My name is Rama"

// 11. Repeat - repeat the string multiple times
console.log("Repeat string 2 times:", s2.repeat(2)); // "My name is KrishnaMy name is Krishna"

// 12. Trim - remove spaces from both ends (extra demo)
const s3 = "   Hello world!   ";
console.log("Original with spaces:", `"${s3}"`);
console.log("Trimmed:", `"${s3.trim()}"`);

// 13. PadStart / PadEnd - add padding
const padded = "7";
console.log("Pad start to length 3:", padded.padStart(3, "0")); // "007"
console.log("Pad end to length 5:", padded.padEnd(5, "*")); // "7****"

// ------------------------
// Safe Access & Case Sensitivity Tips
// ------------------------

// Always check indexOf result before using substring
const keyword = "Krishna";
const index = s2.indexOf(keyword);
if (index !== -1) {
  console.log(`Found "${keyword}" at index:`, index);
} else {
  console.log(`"${keyword}" not found in the string.`);
}

// Case matters in all string methods
console.log("Check 'krishna' (lowercase) using includes:", s2.includes("krishna")); // false
