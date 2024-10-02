function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTime() {
  return getRandomNumber(1000, 2000);
}

setTimeout(() => console.log("One"), getRandomTime());
setTimeout(() => console.log("Two"), getRandomTime());
setTimeout(() => console.log("Three"), getRandomTime());
setTimeout(() => console.log("Four"), getRandomTime());
setTimeout(() => console.log("Five"), getRandomTime());
