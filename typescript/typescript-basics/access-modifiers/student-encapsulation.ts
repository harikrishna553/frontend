class Student {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Getter
  public getName(): string {
    return this.name;
  }

  // Setter
  public setName(newName: string): void {
    if (newName.trim().length === 0) {
      console.log("Invalid name. Cannot be empty.");
    } else {
      this.name = newName;
    }
  }
}

const student1 = new Student("Alice");

// Trying to access private property directly 
// console.log(student1.name); // Error

// Correct way using getter 
console.log(student1.getName()); // Alice

// Updating name using setter
student1.setName("Bob");
console.log(student1.getName()); // Bob

// Trying to set invalid name
student1.setName(""); // Invalid name. Cannot be empty.
