const obj = {
    a: 1,
    b: 2
};

Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
});

for (let key in obj) {
    console.log(key); // Only 'a' and 'b' will be logged
}

// Listing all enumerable properties
console.log(Object.keys(obj)); // ['a', 'b']
