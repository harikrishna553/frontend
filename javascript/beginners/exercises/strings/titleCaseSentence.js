function titleCase(str){
	if(str === null || str === undefined || typeof str !== 'string'){
		throw new Error("Input must be a non-null, non-undefined string");
	}

	let splits = str.split(' ');
	let result = '';

	for(let i = 0; i < splits.length; i++){
		let split = splits[i];
		let splitTitleCase = split.charAt(0).toUpperCase() + split.slice(1);

		result += splitTitleCase;
		result += " ";
	}
	return result.trim();
}

let str = "I'm a little tea pot";

console.log(`Title case of "${str}" is "${titleCase(str)}"`);