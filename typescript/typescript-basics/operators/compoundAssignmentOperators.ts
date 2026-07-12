let x: number = 10;
let y: number = 3;

console.log("Initial values -> x:", x, ", y:", y);

// Addition assignment
x += y;  // x = 10 + 3 = 13
console.log("After x += y ->", x);

// Subtraction assignment
x -= y;  // x = 13 - 3 = 10
console.log("After x -= y ->", x);

// Multiplication assignment
x *= y;  // x = 10 * 3 = 30
console.log("After x *= y ->", x);

// Division assignment
x /= y;  // x = 30 / 3 = 10
console.log("After x /= y ->", x);

// Modulus assignment
x %= y;  // x = 10 % 3 = 1
console.log("After x %= y ->", x);

// Exponentiation assignment
x = 2;
x **= 3; // x = 2 ** 3 = 8
console.log("After x **= 3 ->", x);

// Bitwise AND assignment
x = 5;   // binary: 0101
y = 3;   // binary: 0011
x &= y;  // x = 0101 & 0011 = 0001 (1)
console.log("After x &= y ->", x);

// Bitwise OR assignment
x |= y;  // x = 0001 | 0011 = 0011 (3)
console.log("After x |= y ->", x);

// Bitwise XOR assignment
x ^= y;  // x = 0011 ^ 0011 = 0000 (0)
console.log("After x ^= y ->", x);

// Left shift assignment
x = 1;   // binary: 0001
x <<= 2; // x = 0001 << 2 = 0100 (4)
console.log("After x <<= 2 ->", x);

// Right shift assignment
x >>= 1; // x = 0100 >> 1 = 0010 (2)
console.log("After x >>= 1 ->", x);
