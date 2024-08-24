let str = "Hello";
str[0] = "h"; // Trying to change the first character to 'h'
console.log(`str : ${str}`); // Output: "Hello"

str = "World";
console.log(`str : ${str}`); // Output: "World"

let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(`result : ${result}`); // Output: "Hello World"
console.log(`str1 : ${str1}`);   // Output: "Hello"
console.log(`str2 : ${str2}`);   // Output: "World"

str = "Hello World";
let newStr = str.toLowerCase();
console.log(`newStr : ${newStr}`); // Output: "hello world"
console.log(`str : ${str}`);    // Output: "Hello World"


function modifyString(str) {
    str = str + " modified";
    return str;
}

let original = "Original";
let modified = modifyString(original);

console.log(`original : ${original}`); // Output: "Original"
console.log(`modified : ${modified}`); // Output: "Original modified"
