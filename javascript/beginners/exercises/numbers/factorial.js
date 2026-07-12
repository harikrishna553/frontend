function factorialIteration(num){
	if(typeof num !== 'number' || num === null || num == undefined || num < 0){
		throw new Error('Input must be a non-null, non-undefined and a positive integer');
	}

	let result = 1;

	for(let i = 1; i <= num; i++){
		result *= i;
	}

	return result;
}

function factorialUsingRecursion(num){
	if(typeof num !== 'number' || num === null || num == undefined || num < 0){
		throw new Error('Input must be a non-null, non-undefined and a positive integer');
	}

	return factorial(num);
}

function factorial(num){
	if(num === 1 || num === 0){
		return 1;
	}
	return num * factorial(num-1);
}

let num1 = 0;
let num2 = 5;
let num3 = -2;

console.log('Using iteration');
console.log(`factorial of ${num1}: ${factorialIteration(num1)}`);
console.log(`factorial of ${num2}: ${factorialIteration(num2)}`);
try{
	console.log(`factorial of ${num3}: ${factorialIteration(num3)}`);
}catch(error){
	console.log(error.message);
}

console.log('\nUsing recursion');
console.log(`factorial of ${num1}: ${factorialUsingRecursion(num1)}`);
console.log(`factorial of ${num2}: ${factorialUsingRecursion(num2)}`);
try{
	console.log(`factorial of ${num3}: ${factorialUsingRecursion(num3)}`);
}catch(error){
	console.log(error.message);
}
