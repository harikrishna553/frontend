let a = 0;
let b = 5;

let result = a && (b++ > 10);
console.log(`a: ${a}`)
console.log(`b: ${b}`)
console.log(`result: ${result}`)

a = 1
result = a && (b++ > 10);
console.log(`\na: ${a}`)
console.log(`b: ${b}`)
console.log(`result: ${result}`)