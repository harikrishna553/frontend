function printArray(label, arr) {
  console.log(`${label}`)
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
  }
  console.log('\n');
}

let fruits = ['apple', 'banana', 'orange'];
printArray('fruits', fruits);

let numbers = new Array(2, 3, 5, 7, 11);
printArray('numbers', numbers);

let emptyArray = [];
printArray('emptyArray', emptyArray);
