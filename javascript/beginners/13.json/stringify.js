const emp = {
    id : 1,
    name : "Krishna",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
}

const empJson = JSON.stringify(emp);

console.log(empJson);