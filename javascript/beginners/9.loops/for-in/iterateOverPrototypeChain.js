const person = {
    name: "Krishna",
    age: 34
};

Object.prototype.country = "Bangalore"; // Adding a property to the prototype

console.log('Print all the properties of person object');
for (let key in person) {
    console.log(key + ": " + person[key]);
}

console.log('\nPrint all the properties of person object, and exclude prototype properties');
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
