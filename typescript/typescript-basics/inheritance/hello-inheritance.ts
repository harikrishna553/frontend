/**
 * Base parent class representing a generic Animal.
 */
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

/**
 * Dog class extends Animal.
 * Demonstrates inheritance, constructor chaining, and method overriding.
 */
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Calls parent (Animal) constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} the ${this.breed} is barking: Woof! Woof!`);
  }

  // Overriding parent method
  makeSound() {
    console.log(`${this.name} says: Woof! Woof!`);
  }
}

/**
 * Cat class extends Animal.
 */
class Cat extends Animal {
  color: string;

  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} the ${this.color} cat is meowing: Meow! Meow!`);
  }

  // Overriding parent method
  makeSound() {
    console.log(`${this.name} says: Meow! Meow!`);
  }
}

/**
 * Cow class extends Animal.
 * Demonstrates method overriding.
 */
class Cow extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Override eat behavior
  eat() {
    console.log(`${this.name} is eating grass`);
  }

  makeSound() {
    console.log(`${this.name} says: Moo! Moo!`);
  }
}

/**
 * Tiger class extends Animal.
 * Demonstrates method overriding.
 */
class Tiger extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Override eat behavior
  eat() {
    console.log(`${this.name} is eating meat`);
  }

  makeSound() {
    console.log(`${this.name} roars: Grrrr!`);
  }
}

/**
 * Mammal extends Animal.
 * Demonstrates multi-level inheritance.
 */
class Mammal extends Animal {
  constructor(name: string) {
    super(name);
  }

  hasMilk() {
    console.log(`${this.name} is a mammal and feeds milk to young ones`);
  }
}

/**
 * Labrador extends Mammal (multi-level inheritance).
 */
class Labrador extends Mammal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log(`${this.name} the Labrador is barking happily!`);
  }
}

/**
 * Function demonstrating polymorphism.
 * Accepts any Animal and calls makeSound().
 */
function makeAnimalSound(animal: Animal) {
  animal.makeSound(); // Executes actual method based on object type
}

// -------------------------
// USAGE / DEMO
// -------------------------
let dog = new Dog("Buddy", "German Shepherd");
dog.eat();      // Inherited from Animal
dog.bark();     // Dog specific
dog.makeSound();// Overridden

let cat = new Cat("Kitty", "Black");
cat.sleep();    // Inherited from Animal
cat.meow();     // Cat specific
cat.makeSound();// Overridden

let cow = new Cow("Thulasi");
cow.eat();      // Overridden eat()
cow.makeSound();// Moo! Moo!

let tiger = new Tiger("Arjun");
tiger.eat();    // Overridden eat()
tiger.makeSound();

let labrador = new Labrador("Ram");
labrador.eat();      // From Animal
labrador.hasMilk();  // From Mammal
labrador.bark();     // From Labrador

// Polymorphism in action
console.log("\n--- Polymorphism Demo ---");
makeAnimalSound(dog);     // Woof! Woof!
makeAnimalSound(cat);     // Meow! Meow!
makeAnimalSound(cow);     // Moo! Moo!
makeAnimalSound(tiger);   // Grrrr!
