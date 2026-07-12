// The `...nums` syntax is a rest parameter that allows passing any number of arguments as an array
function multiply(...nums: number[]): number {
  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }

  return result;
}

console.log(`Multiplying [2, 3] => Result: ${multiply(2, 3)}`);             // 6
console.log(`Multiplying [2, 3, 4] => Result: ${multiply(2, 3, 4)}`);       // 24
console.log(`Multiplying [2, 3, 4, 5] => Result: ${multiply(2, 3, 4, 5)}`); // 120
