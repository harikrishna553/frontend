console.log("Add Elements to the beginning of the array");
let originalArray = [3, 4, 5, 6];
let newArray = [1, 2, ...originalArray]; // newArray contain values 1,2,3,4,5,6
console.log(`originalArray : ${originalArray}`);
console.log(`newArray : ${newArray}`);

console.log("\nAdding Elements at the end of the Array");
originalArray = [3, 4, 5, 6];
newArray = [...originalArray, 7, 8]; // newArray contain values 3,4,5,6,7,8
console.log(`originalArray : ${originalArray}`);
console.log(`newArray : ${newArray}`);
