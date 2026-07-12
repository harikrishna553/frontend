const user = { name: "Krishna", age: 34, city: "Bangalore" };

// Update name
const userNameUpdated = {...user, name: "Gopi"}

// Update city
const cityUpdated = {...user, city: "Chennai"}

// Update name and age
const nameAndAgeUpdated = {...user, name: "Rahul", age: 37}

console.log('user: ' + JSON.stringify(user));
console.log('userNameUpdated: ' + JSON.stringify(userNameUpdated));
console.log('cityUpdated: ' + JSON.stringify(cityUpdated));
console.log('nameAndAgeUpdated: ' + JSON.stringify(nameAndAgeUpdated));