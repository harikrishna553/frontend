const person = {
    name: 'Krishna',
    address: {
        city: 'Banaglore',
        state : 'Karnataka',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
};

// Destructuring assignment
const {
    name,
    address: {
        city : myCity,
        state,
        coordinates: { lat, lng }
    }
} = person;

console.log(`name : ${name}`);
console.log(`myCity : ${myCity}`);
console.log(`state : ${state}`);
console.log(`lat : ${lat}`);
console.log(`lng : ${lng}`);