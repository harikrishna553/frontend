person1 = {
	id : 1,
	name : "Krishna",
	"place of birth" : "India" 
}

function aboutPerson(person){
	let personId = person.id;
	let name = person['name'];
	let placeOfBirth = person['place of birth'];

	console.log(`id : ${personId}`);
	console.log(`name : ${name}`);
	console.log(`placeOfBirth : ${placeOfBirth}\n`);
}

aboutPerson(person1);

// Add new property age
console.log('Add new property age');
person1.age = 35;

// Update person name
console.log('Update name to the value "Ram"\n');
person1.name = "Ram";

aboutPerson(person1);
console.log(`age: ${person1.age}`)