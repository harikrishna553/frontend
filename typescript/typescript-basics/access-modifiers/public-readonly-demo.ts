class Student {
    // 'name' is public and readonly
    public readonly name: string;

    constructor(studentName: string) {
        this.name = studentName;
    }
}

let student = new Student("Ram");
console.log(student.name); // Output: Ram
// student.name = "Chamu"; // Error: Cannot assign to 'name' because it is a read-only property

class Book {
    // 'title' is public and readonly
    public readonly title: string;

    constructor(title: string) {
        this.title = title;
    }
}

let book = new Book("TypeScript Basics");
console.log(book.title); // Output: TypeScript Basics
// book.title = "Advanced TypeScript"; // Error: Cannot assign to 'title' because it is a read-only property

// Another class showing public without readonly
class Course {
    public courseName: string;

    constructor(courseName: string) {
        this.courseName = courseName;
    }
}

let course = new Course("Web Development");
console.log(course.courseName); // Output: Web Development
course.courseName = "Advanced Web Development"; // Allowed
console.log(course.courseName); // Output: Advanced Web Development
