person1 = {
	id : 1,
	name : "Krishna",
	"place of birth" : "India" 
}

function printObj(obj){
	for(let property in obj){
		console.log(`${property} : ${obj[property]}`);
	}
}

printObj(person1);

console.log('\nDeleting the object property id\n');
delete person1.id;

printObj(person1);