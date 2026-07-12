const numbers = [10, 20, 30, 40, 50];

// Skipping Second and Fourth elements using a comma
const [first, , third, , fifth] = numbers;

console.log(`first : ${first}`); 
console.log(`third : ${third}`);
console.log(`fifth : ${fifth}`);
