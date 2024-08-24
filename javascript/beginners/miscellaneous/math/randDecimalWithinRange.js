function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(`Random decimal between 5 and 10 : ${getRandomDecimal(5, 10)}`);
console.log(`Random decimal between 5 and 11 : ${getRandomDecimal(5, 11)}`);
console.log(`Random decimal between 5 and 12 : ${getRandomDecimal(5, 12)}`);