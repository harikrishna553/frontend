const emp = {
  name: "krishna",
  age: 36,
  address: { state: "Karmataka", city: "Bangaalore" },
};

const empUpdatedWithCity = {
    ...emp,
    address: {...emp.address, city: "Chennai"}
}

console.log(`emp : ${JSON.stringify(emp)}`);
console.log(`empUpdatedWithCity : ${JSON.stringify(empUpdatedWithCity)}`);