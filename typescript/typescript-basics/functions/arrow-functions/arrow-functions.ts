const double = (num: number): number => num * 2;
console.log(`Double of 4 is: ${double(4)}`); // Output: Double of 4 is: 8

const sayHello = (): string => "Welcome to TypeScript!";
console.log(`Greeting Message: ${sayHello()}`); // Output: Greeting Message: Welcome to TypeScript!

const getFullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;
console.log(`Full Name: ${getFullName("Lahari", "Gurram")}`); // Output: Full Name: Lahari Gurram

const calculateBill = (amount: number, taxRate: number): number => {
  const tax = amount * taxRate;
  const total = amount + tax;
  return total;
};

const amount = 1000;
const taxRate = 0.18;
console.log(`Total bill for amount ₹${amount} with tax rate ${taxRate * 100}% is: ₹${calculateBill(amount, taxRate)}`); 
