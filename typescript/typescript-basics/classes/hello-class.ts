class Student {
    // Properties
    private firstName: string;
    private lastName: string;
    private age?: number;
    private readonly studentId: string;  // Read-only: set once during construction

    // Constructor Overload Declarations (signatures only)
    constructor(firstName: string, lastName: string);
    constructor(firstName: string, lastName: string, age: number);
    constructor(firstName: string, lastName: string, age: number, studentId: string);
    
    // Constructor
    constructor(firstName: string, lastName: string, age?: number, studentId: string = "NA") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.studentId = studentId;
    }

    // Getter methods (read access to private fields)
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge(): number {
        return this.age;
    }

    getStudentId(): string {
        return this.studentId;
    }

    // Setter method (write access to private field)
    setAge(newAge: number): void {
        if (newAge > 0 && newAge < 120) {
            this.age = newAge;
        } else {
            console.log("Invalid age provided.");
        }
    }

    // Method to display details
    displayDetails(): string {
        return `Name: ${this.getFullName()}, Age: ${this.age}, ID: ${this.studentId}`;
    }
}

// Creating multiple student objects
let student1 = new Student("Krishna", "Gurram", 34, "STU001");
let student2 = new Student("Lahari", "Reddy", 28);  // Using default studentId
let student3 = new Student("Arjun", "Verma", 21, "STU003");

// Using methods to display student information
console.log(student1.displayDetails());
console.log(student2.displayDetails());
console.log(student3.displayDetails());

// Updating age using setter
student3.setAge(22);
console.log(`Updated Age for ${student3.getFullName()}: ${student3.getAge()}`);

// student1.firstName = "New Name";  // Error: firstName is private
// student1.studentId = "NEWID";     // Error: studentId is readonly
