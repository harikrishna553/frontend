let arr = [1, 2, 3];
let newArray = [...arr];

console.log(`arr : ${arr}`);
console.log(`newArray : ${newArray}`);
console.log(`newArray === arr : ${newArray === arr}`); 

console.log('\nAdding new element 4 to the newArray');
newArray.push(4);

console.log(`\narr : ${arr}`);
console.log(`newArray : ${newArray}`);
console.log(`newArray === arr : ${newArray === arr}`); 