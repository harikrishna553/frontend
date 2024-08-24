const myArray = Object.freeze([1, 2, 3]);

console.log(`myArray : ${myArray}`);

try{
	myArray.push(4); 
}catch(error){
	console.log(`Error occurred: ${error.message}`);
}
