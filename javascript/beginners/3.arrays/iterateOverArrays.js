let fruits = ['apple', 'banana', 'orange'];

// Using for loop
console.log('Using for loop')
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach
console.log('\nUsing forEach')
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Using map (creates a new array)
console.log('\nUsing map (creates a new array)')
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits);  // Outputs: ['APPLE', 'GRAPE', 'ORANGE']
