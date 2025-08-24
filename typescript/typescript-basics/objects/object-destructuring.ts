const student = {
  firstName: "Emma",
  lastName: "Watson",
  email: "emma.watson@university.edu", // Top-level email
  age: 22,
  address: {
    city: "London",
    zipCode: "NW1 6XE"
  },
  contact: {
    email: "emma@example.com", // Nested email
    phone: "123-456-7890"
  },
  scores: {
    math: 95,
    english: 88
  }
};

// 1. Destructuring top-level properties with aliasing for email
const {
  firstName,
  lastName,
  age,
  email: universityEmail // aliasing
} = student;

console.log("After top-level destructuring:");
console.log({ firstName, lastName, age, universityEmail });
// Output: { firstName: 'Emma', lastName: 'Watson', age: 22, universityEmail: 'emma.watson@university.edu' }

// 2. Destructuring nested contact object and its properties (including aliasing email)
const {
  contact,
  contact: {
    email: personalEmail,
    phone
  }
} = student;

console.log("\nAfter destructuring contact:");
console.log({ contact, personalEmail, phone });
/* Output:
{
  contact: { email: 'emma@example.com', phone: '123-456-7890' },
  personalEmail: 'emma@example.com',
  phone: '123-456-7890'
}
*/

// 3. Destructuring nested address
const {
  address: { city, zipCode }
} = student;

console.log("\nAfter destructuring address:");
console.log({ city, zipCode });
// Output: { city: 'London', zipCode: 'NW1 6XE' }

// 4. Destructuring nested scores
const {
  scores: { math, english }
} = student;

console.log("\nAfter destructuring scores:");
console.log({ math, english });
// Output: { math: 95, english: 88 }

// Final: Using all variables together
console.log("\nFinal student summary:");
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age}`);
console.log(`University Email: ${universityEmail}`);
console.log(`Personal Email: ${personalEmail}`);
console.log(`Phone: ${phone}`);
console.log(`City: ${city}`);
console.log(`Zip Code: ${zipCode}`);
console.log(`Math Score: ${math}`);
console.log(`English Score: ${english}`);

// Still have access to the full contact object
console.log("\nFull contact object:");
console.log(contact);
