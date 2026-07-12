class Student {
    readonly name: string = "Lahari";
}

let student = new Student();
student.name = "Harini"; // Error: Cannot assign to 'name' because it is a read-only property
