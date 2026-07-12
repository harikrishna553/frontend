// Step 1: Define the class decorator
function LogClass(constructor: Function) {
  console.log("A class has been decorated!");
  console.log("Constructor received:", constructor);
}

// Step 2: Apply the decorator to a class
@LogClass
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

