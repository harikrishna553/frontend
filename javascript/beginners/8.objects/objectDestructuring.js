let person1 = {
	id : 1,
	name : "Krishna",
	age : 35,
	address : {
		city : "Bangalore",
		country : "India"
	}
};

let {id, name, age, address} = person1;

console.log(`id : ${id}`);
console.log(`name : ${name}`);
console.log(`age : ${age}`);
console.log(`city : ${address.city}`);
console.log(`country : ${address.country}`);