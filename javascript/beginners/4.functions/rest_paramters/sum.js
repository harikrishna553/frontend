function sumAll(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(`sumAll(1) : ${sumAll(1)}`); 
console.log(`sumAll(1, 2) : ${sumAll(1, 2)}`); 
console.log(`sumAll(1, 2, 3) : ${sumAll(1, 2, 3)}`); 
