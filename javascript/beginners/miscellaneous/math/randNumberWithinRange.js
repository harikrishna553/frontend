function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up the min value to the nearest integer
    max = Math.floor(max); // Round down the max value to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Random number between 5 and 10 ${getRandomInt(5, 10)}`);
console.log(`Random number between 5 and 10 ${getRandomInt(5, 11)}`);
console.log(`Random number between 5 and 10 ${getRandomInt(5, 12)}`);