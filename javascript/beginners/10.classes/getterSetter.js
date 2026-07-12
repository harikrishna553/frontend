class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter
  get age() {
    return this._age;
  }

  // Setter
  set age(value) {
    if (value < 0) {
      console.log('Age cannot be negative.');
    } else {
      this._age = value;
    }
  }
}

const person1 = new Person('Krishna', 35);
console.log(`Age : ${person1.age}`);

person1.age = -5;
person1.age = 45;
console.log(`Age : ${person1.age}`); // Output: 45
