function isPalindrome(str){
	if (str === undefined || str === null || typeof str !== 'string'){
		throw new Error('Input must be a non-null, non-undefined string');
	}

	let reversedStr = str.split('').reverse().join('');

	return str === reversedStr;
}

let str1 = "racecar";
let str2 = "hello";

console.log(`is ${str1} palindrome ? ${isPalindrome(str1)}`);
console.log(`is ${str2} palindrome ? ${isPalindrome(str2)}`);