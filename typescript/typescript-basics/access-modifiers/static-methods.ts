class Student {
    name: string;
    grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }

    // Static method - rule common to all
    static getPassingGrade(): number {
        return 40;
    }

    hasPassed(): boolean {
        return this.grade >= Student.getPassingGrade();
    }
}

let s1 = new Student("Alice", 55);
let s2 = new Student("Bob", 35);

console.log(s1.hasPassed()); // true
console.log(s2.hasPassed()); // false
console.log(Student.getPassingGrade()); // 40
