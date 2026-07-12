class Person {
  constructor(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
  }

  greet() {
    console.log("Hello, my name is " + this.name + "\n");
  }
}

function aboutPerson(person){
  console.log(`name: ${person.name}`);
  console.log(`age: ${person.age}`);
  console.log(`isStudent: ${person.isStudent}`);
  person.greet();
}

const person1 = new Person("Alice", 25, false);
const person2 = new Person("Bob", 30, true);

aboutPerson(person1)
aboutPerson(person2)