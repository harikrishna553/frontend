let fruits = ['apple', 'banana', 'orange'];
let position = fruits.indexOf('grape');
console.log(`grape position ${position}`);

position = fruits.indexOf('orange');
console.log(`orange position ${position}`);

let hasGrape = fruits.includes('grape');
console.log(`hasGrape : ${hasGrape}`);

let hasOrange = fruits.includes('orange');
console.log(`hasOrange : ${hasOrange}`);