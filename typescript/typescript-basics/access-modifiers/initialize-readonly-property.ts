class Student {
    readonly name: string;

    constructor(studentName: string) {
        this.name = studentName;
    }
}

let student = new Student("Ram");
console.log(student.name); // Output: Ram
// student.name = "Chamu"; // Error: Cannot assign to 'name' because it is a read-only property

class Book {
    public readonly title: string;

    constructor(title: string) {
        this.title = title;
    }
}
