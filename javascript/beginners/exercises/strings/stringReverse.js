function reverse(str){
	if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error('Input must be a non-null, non-undefined string');
    }

	let result = '';

	for(let i = str.length - 1; i >= 0; i--){
		result += str[i];
	}

	return result;
}

function reverseUsingSplit(str){
	if( typeof str !== 'string' || str === null || str === undefined){
		throw new Error('Input must be a non-null, non-undefined string');
	}

	return str.split('').reverse().join('');
}

function reverseUsingRecursion(str){
	if( typeof str !== 'string' || str === null || str === undefined){
		throw new Error('Input must be a non-null, non-undefined string');
	}

	return recurseReverse(str);
}

function recurseReverse(str){
	if(str.length === 0){
		return '';
	}

	return str[str.length-1] + recurseReverse(str.substring(0, str.length-1));
}

let str = 'hello'
console.log(`str: ${str}`);
console.log(`reversed: ${reverse(str)}`);
console.log(`reversed: ${reverseUsingSplit(str)}`);
console.log(`reversed: ${reverseUsingRecursion(str)}`);