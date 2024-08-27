function longestWord(str){
	if(str === undefined || str === null || typeof str !== 'string'){
		throw new Error("Input must be a non-null, non-undefined string");
	}

	let splits = str.split(" ");

	let longestWord = splits[0];

	for(let i = 1; i < splits.length; i++){
		let splittedStr = splits[i];

		if(splittedStr.length > longestWord.length){
			longestWord = splittedStr;
		}
	}

	return longestWord;
}

let str = "The quick brown fox jumped over the lazy dog";

console.log(`Longest word in ${str} is "${longestWord(str)}"`);