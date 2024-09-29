const emp = {name : "Krishna", "age" : 36};
const address = {state: "Karnataka", country : "India"};

const empWithAddress = {...emp, ...address};

console.log(`emp : ${JSON.stringify(emp)}`);
console.log(`address : ${JSON.stringify(address)}`);
console.log(`empWithAddress : ${JSON.stringify(empWithAddress)}`);