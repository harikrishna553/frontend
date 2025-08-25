class Student {
  firstName: string;
  lastName: string;
  age: number;

  constructor(fName: string, lName: string, age: number) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }
}

let student1 = new Student("Krishna", "Varma", 50);
let student2 = new Student("Thulasi", "Devi", 21);

console.log(student1.firstName);     
console.log(student1.lastName);  
console.log(student1.age); 

console.log(student2.firstName);  
console.log(student2.lastName); 
console.log(student2.age);
