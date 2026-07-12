let arr = [1, 2, {a: 3}];
let newArray = [...arr];

console.log(`arr : ${arr}`);
console.log(`newArray : ${newArray}`);
console.log(`arr[2].a : ${arr[2].a}, newArray[2].a : ${newArray[2].a}`)

console.log('\nUpdating first element of arr');
arr[0] = 111222;

console.log('Updating third element, which is an object')
newArray[2].a = 'Hello World!!!!';

console.log(`\narr : ${arr}`);
console.log(`newArray : ${newArray}`);
console.log(`arr[2].a : ${arr[2].a}, newArray[2].a : ${newArray[2].a}`)