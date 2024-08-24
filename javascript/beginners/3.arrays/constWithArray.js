const myArray = [1, 2, 3];

console.log(`myArray : ${myArray}`);

// This is allowed because we're mutating the array's contents, 
// not reassigning the variable.
myArray.push(4); // myArray is now [1, 2, 3, 4]
myArray[0] = 10; // myArray is now [10, 2, 3, 4]
console.log(`myArray : ${myArray}`);

try{
	// However, this is not allowed because it attempts to reassign the entire array.
	myArray = [5, 6, 7]; // Error: Assignment to constant variable.
}catch(error){
	console.log(`Error occurred: ${error.message}`);
}
