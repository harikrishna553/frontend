class Student {
  firstName: string;
  lastName: string;
  marks: number;

  constructor(firstName: string, lastName: string, marks: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.marks = marks;
  }

  // A method to return the full name
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Displays student details
  displayDetails(): void {
    console.log(`Student: ${this.getFullName()}, Marks: ${this.marks}`);
  }

  // Checks if student has passed (marks >= 40)
  isPassed(): boolean {
    return this.marks >= 40;
  }

  // Displays a pass/fail message based on marks
  showResult(): void {
    if (this.isPassed()) {
      console.log(`${this.getFullName()} has passed the exam.`);
    } else {
      console.log(`${this.getFullName()} has failed the exam.`);
    }
  }

  // Greets the student based on the time of day
  greet(timeOfDay: string): void {
    console.log(`Good ${timeOfDay.toLowerCase()}, ${this.firstName}!`);
  }
}

// Create student instances
const student1 = new Student("Chamu", "Gurram", 88);
student1.greet("Afternoon");
student1.displayDetails();
student1.showResult();

console.log("---------------");

const student2 = new Student("Harini", "Gurram", 32);
student2.greet("Morning");
student2.displayDetails();
student2.showResult();