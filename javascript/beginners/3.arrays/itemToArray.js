const item = 5;
const array1 = [item];

const array2 = Array.of(item);

const array3 = [].concat(item);

const array4 = [];
array4.push(item);

console.log(`item : ${item}`);
console.log(`array1 : ${array1}`);
console.log(`array2 : ${array2}`);
console.log(`array3 : ${array3}`);
console.log(`array4 : ${array4}`);
