let a = 1;
let b = 5;

let result = a  ||(b++ > 10);
console.log(`a: ${a}`)
console.log(`b: ${b}`)
console.log(`result: ${result}`)

a = 0
result = a  ||(b++ > 10);
console.log(`\na: ${a}`)
console.log(`b: ${b}`)
console.log(`result: ${result}`)