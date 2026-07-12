console.log(`parseInt("123") : ${parseInt("123")}`);
console.log(`parseInt("123.45") : ${parseInt("123.45")}`);

console.log(`parseInt("1010", 2) : ${parseInt("1010", 2)}`);
console.log(`parseInt("FF", 16) : ${parseInt("FF", 16)}`);
console.log(`parseInt("77", 8) : ${parseInt("77", 8)}`);

console.log(`parseInt("123abc") : ${parseInt("123abc")}`);
console.log(`parseInt("abc123") : ${parseInt("abc123")}`);

console.log(`parseInt("   456") : ${parseInt("   456")}`);

console.log(`parseInt("10") : ${parseInt("10")}`);
console.log(`parseInt("0x10") : ${parseInt("0x10")}`);

console.log(`parseInt("10", 10) : ${parseInt("10", 10)}`);
console.log(`parseInt("010", 10) : ${parseInt("010", 10)}`);

console.log(`parseInt("123", 37) : ${parseInt("123", 37)}`);
console.log(`parseInt("123", 1) : ${parseInt("123", 1)}`);
console.log(`parseInt("Hello", 8) : ${parseInt("Hello", 8)}`);

console.log(`parseInt("-123") : ${parseInt("-123")}`);
console.log(`parseInt("-0xF", 16) : ${parseInt("-0xF", 16)}`);

console.log(`parseInt("010") : ${parseInt("010")}`);
console.log(`parseInt("010", 8): ${parseInt("010", 8)}`);
console.log(`parseInt("010", 10) : ${parseInt("010", 10)}`);
