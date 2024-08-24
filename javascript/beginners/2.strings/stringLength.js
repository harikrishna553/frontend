let str = "Hello, World!";
let lengthOfString = str.length;
console.log(`String : ${str}, length : ${lengthOfString}`);

str = "Hello";
str.length = 10;
console.log(`String : ${str}, length : ${str.length}`);

str = "😊";
console.log(`String : ${str}, length : ${str.length}`);

str = "";
console.log(`String : ${str}, length : ${str.length}`);

let password = "abc123";
if (password.length >= 8) {
    console.log("Password is long enough.");
} else {
    console.log("Password is too short.");
}

str = "JavaScript";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
