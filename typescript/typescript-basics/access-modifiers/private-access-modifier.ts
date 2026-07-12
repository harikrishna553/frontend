class Student {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Getter
  getName(): string {
    return this.name;
  }

  // Setter
  setSame(newName: string) {
    this.name = newName;
  }
}

const student = new Student("Krishna");

// Using the getter
console.log(student.getName());

// Using the setter
student.setSame("Ram");

// Using the getter
console.log(student.getName());

