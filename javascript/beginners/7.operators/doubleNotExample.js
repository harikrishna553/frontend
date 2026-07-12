let value = "Hello";
let booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);

value = 0;
booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);

value = 1;
booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);

value = 0.0;
booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);

value = NaN;
booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);

value = undefined;
booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);

value = null;
booleanValue = !!value;
console.log(`value : ${value}, booleanValue : ${booleanValue}`);
