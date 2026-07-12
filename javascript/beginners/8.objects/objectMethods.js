let person1 = {
	id : 1,
	name : "Krishna",
	age : 35,
	aboutMe: function(){
		console.log(`id : ${this.id}`);
		console.log(`name : ${this.name}`);
		console.log(`age : ${this.age}`);
	}
};

person1.aboutMe();