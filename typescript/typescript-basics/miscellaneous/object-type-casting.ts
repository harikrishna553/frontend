// -------------------
// Example 1: Interfaces and Object Assignment
// -------------------

interface Employee {
  id: number;
}

let e1: Employee; // e1 is of type Employee (must have an 'id')

let e2 = { id: 123, name: "Krishna" }; 
// e2 has both 'id' and an extra property 'name'

// Assigning e2 to e1 works because Employee only needs 'id'
e1 = e2; 
console.log(`e1 : ${JSON.stringify(e1)}`); // {"id":123,"name":"Krishna"}
console.log(`e2 : ${JSON.stringify(e2)}`); // {"id":123,"name":"Krishna"}

// But assigning e1 to e2 would fail, because e1 does not have 'name'
// e2 = e1; // Error

// -------------------
// Example 2: Type Casting
// -------------------

e1 = { id: 123 }; 
// Now e1 only has 'id'

let e3 = e1 as { id: number; name: string };
// We are forcing TypeScript to treat e1 as if it has both 'id' and 'name'
console.log(`e3 : ${JSON.stringify(e3)}`); // {"id":123}
// Note: At runtime, 'name' is still missing. Be careful with casting!

// -------------------
// Example 3: Car vs ElectricCar
// -------------------

interface Car {
  brand: string;
}

interface ElectricCar {
  brand: string;
  battery: number;
}

let car: Car = { brand: "Toyota" };
let tesla: ElectricCar = { brand: "Tesla", battery: 90 };

// Works: 'Car' only requires 'brand', which 'tesla' has
car = tesla; 
console.log(`car : ${JSON.stringify(car)}`); // {"brand":"Tesla","battery":90}

// Error: 'tesla' expects 'battery', but 'car' does not have it
// tesla = car; // Error

// -------------------
// Example 4: Square vs ColoredSquare
// -------------------

interface Square {
  side: number;
}

interface ColoredSquare {
  side: number;
  color: string;
}

let sq: Square = { side: 5 };
let csq: ColoredSquare = { side: 10, color: "red" };

// Works: 'Square' only needs 'side', and 'csq' has it
sq = csq; 
console.log(`sq : ${JSON.stringify(sq)}`); // {"side":10,"color":"red"}

// Error: 'ColoredSquare' needs both 'side' and 'color', but 'sq' only has 'side'
// csq = sq; // Error
