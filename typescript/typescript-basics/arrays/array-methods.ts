// Initial guest list
let guests: string[] = ["Krishna", "Lahari", "Ram", "Harini", "Arjun", "Chamu"];

console.log("Initial Guest List:", guests);

// ===============================
// 1. Convert to String
// ===============================
console.log("\n1. toString()");
console.log(guests.toString()); // Output: Krishna,Lahari,Ram,Harini,Arjun,Chamu

// ===============================
// 2. Join with a custom separator
// ===============================
console.log("\n2. join(' | ')");
console.log(guests.join(" | ")); // Output: Krishna | Lahari | Ram | Harini | Arjun | Chamu

// ===============================
// 3. Slice - Get a part of the array (non-destructive)
// ===============================
console.log("\n3. slice(1, 4)");
let selectedGuests = guests.slice(1, 4);
console.log("Selected Guests:", selectedGuests); // Lahari, Ram, Harini
console.log("Original List Still Intact:", guests);

// ===============================
// 4. Splice - Remove and insert guests (destructive)
// ===============================
console.log("\n4. splice(2, 2, 'Thulasi', 'Meghana')");
let removedGuests = guests.splice(2, 2, "Thulasi", "Meghana");
console.log("Removed Guests:", removedGuests); // Ram, Harini
console.log("Updated Guest List:", guests); // Krishna, Lahari, Thulasi, Meghana, Arjun, Chamu

// ===============================
// 5. Push - Add more guests at the end
// ===============================
console.log("\n5. push('Varun', 'Sita')");
guests.push("Varun", "Sita");
console.log("Guest List After Push:", guests);

// ===============================
// 6. Pop - Remove the last guest
// ===============================
console.log("\n6. pop()");
let lastGuest = guests.pop();
console.log("Popped Guest:", lastGuest); // Sita
console.log("Guest List After Pop:", guests);

// ===============================
// 7. Extra: Remove first guest using shift
// ===============================
console.log("\n7. shift()");
let firstGuest = guests.shift();
console.log("Shifted Guest:", firstGuest); // Krishna
console.log("Guest List After Shift:", guests);

// ===============================
// 8. Extra: Add guest at the beginning using unshift
// ===============================
console.log("\n8. unshift('Devika')");
guests.unshift("Devika");
console.log("Guest List After Unshift:", guests);
