const fruits = ['Apple', 'Banana', 'Cherry'];

const fruitWithIndex = fruits.map((fruit, index) => {
  return `${index + 1}: ${fruit}`;
});

console.log(`fruits : ${fruits}`);
console.log(`fruitWithIndex : ${fruitWithIndex}`);
