// object.ts

const student = {
  // Basic Information
  name: "Krishna",
  age: 20,
  isEnrolled: true,

  // Array property
  subjects: ["Math", "Science", "History"],

  // Nested object
  address: {
    street: "Chowdeswari Street",
    city: "Bangalore",
    zipCode: 12345
  },

  // Method: greet
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },

  // Method: displaySubjects
  displaySubjects: function () {
    console.log(`${this.name}'s subjects:`);
    this.subjects.forEach((subject, index) => {
      console.log(`${index + 1}. ${subject}`);
    });
  },

  // Method: checkEnrollment
  checkEnrollment: function () {
    if (this.isEnrolled) {
      console.log(`${this.name} is currently enrolled.`);
    } else {
      console.log(`${this.name} is not enrolled.`);
    }
  }
};

// Accessing properties
console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.address.city);

// Calling methods
student.greet();
student.displaySubjects();
student.checkEnrollment();
