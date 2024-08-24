person1 = {
	id : 1,
	name : "Krishna",
	"place of birth" : "India" 
}

console.log(`is id exists in person1 : ${"id" in person1}`);
console.log(`is "place of birth" exists in person1 : ${person1.hasOwnProperty("place of birth")}`);
console.log(`is age exists in person1 : ${"age" in person1}`)