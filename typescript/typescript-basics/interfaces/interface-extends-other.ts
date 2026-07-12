// Define Exterior interface: properties related to the car's outside look
interface Exterior {
  color: string;
  numOfDoors: number;
}

// Define Interior interface: properties related to the car's inside
interface Interior {
  seats: number;
  auto: boolean; // true = automatic transmission, false = manual
}

// Car interface extends Exterior and Interior interfaces
interface Car extends Exterior, Interior {
  make: string;
  model: string;
  year: number;
}

// Function to print full car details
function printCarDetails(car: Car): void {
  console.log(`Car Details:
  Make: ${car.make}
  Model: ${car.model}
  Year: ${car.year}
  Color: ${car.color}
  Number of Doors: ${car.numOfDoors}
  Seats: ${car.seats}
  Transmission: ${car.auto ? "Automatic" : "Manual"}
  `);
}

// Function to check if car is automatic
function isAutomatic(car: Car): boolean {
  return car.auto;
}

// Create some car objects

const myCar: Car = {
  make: "Maruti",
  model: "Swift",
  year: 2022,
  color: "White",
  numOfDoors: 4,
  seats: 5,
  auto: false, // manual transmission
};

printCarDetails(myCar);

console.log(`Is car automatic? ${isAutomatic(myCar) ? "Yes" : "No"}`);
