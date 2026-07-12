let singleQuote = 'It\'s a sunny day!';
console.log(singleQuote); // Output: It's a sunny day!

let doubleQuote = "He said, \"Hello!\"";
console.log(doubleQuote); // Output: He said, "Hello!"

let backslash = "This is a backslash: \\";
console.log(backslash); // Output: This is a backslash: \

let newLine = "First line\nSecond line";
console.log(newLine);
/* 
Output:
First line
Second line
*/

let carriageReturn = "Hello\rWorld!";
console.log(carriageReturn); // Output: World! (Overwrites "Hello")

let tab = "Column1\tColumn2";
console.log(tab); // Output: Column1    Column2

let backspace = "abc\bdef";
console.log(backspace); // Output: abdef

let formFeed = "Hello\fWorld";
console.log(formFeed); // Output: Hello (new page) World (Effect depends on the environment)

let verticalTab = "First\vSecond";
console.log(verticalTab); // Output: First (vertical tab) Second (Effect varies)

let nullChar = "Hello\0World";
console.log(nullChar); // Output: HelloWorld (No visible effect)

let unicode = "Unicode character: \u263A";
console.log(unicode); // Output: Unicode character: ☺

let hex = "Hexadecimal: \x41"; // Hexadecimal for 'A'
console.log(hex); // Output: Hexadecimal: A

let templateLiteral = `This is a \`backtick\` inside a template literal.`;
console.log(templateLiteral); // Output: This is a `backtick` inside a template literal.

