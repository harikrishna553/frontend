const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = arr.filter((ele) => ele % 2 == 0); // 2,4,6,8
const oddNumbers = arr.filter((ele) => ele % 2 != 0); // 1,3,5,7,9

console.log(`arr : ${arr}`);
console.log(`evenNumbers : ${evenNumbers}`);
console.log(`oddNumbers : ${oddNumbers}`);
