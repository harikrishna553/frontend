// Import default export (class)
import Car from "./car";

// Import named export
import { carInfo } from "./car";

const myCar = new Car("Tesla");
myCar.drive(); // Tesla is driving...

console.log(carInfo("BMW")); // This is a BMW
