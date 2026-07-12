// Default export class
export default class Car {
  constructor(private brand: string) {}

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

// Named export
export function carInfo(brand: string) {
  return `This is a ${brand}`;
}
