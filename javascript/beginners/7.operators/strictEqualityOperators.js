let a = 5;
let b = 5;
console.log(`a : ${a}, b : ${b}, a === b : ${a === b}`);

a = 5;
b = "5";
console.log(`a : ${a}, b : "${b}", a === b : ${a === b}`);

let isActive = true;
let isLoggedIn = true;
console.log(`isActive : ${isActive}, isLoggedIn : ${isLoggedIn}, isActive === isLoggedIn : ${isActive === isLoggedIn}`);

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(`obj1 : ${JSON.stringify(obj1)}, obj2 : ${JSON.stringify(obj2)}, obj1 === obj2 : ${obj1 === obj2}`);
