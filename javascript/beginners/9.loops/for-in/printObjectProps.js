const person = {
    name: "Krishna",
    age: 35,
    city: "Bangalore"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
