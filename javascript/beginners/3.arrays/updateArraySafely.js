function addItemToArray(item, arr) {
    // Ensure arr is an array, or initialize it as an empty array if it's falsy
    arr = arr || [];

    // Add the item to the array
    arr.push(item);

    return arr;
}

// Example 1: Passing an undefined array
let result1 = addItemToArray('apple', undefined);
console.log(result1);  // Output: ['apple']

// Example 2: Passing an existing array
let existingArray = ['banana'];
let result2 = addItemToArray('apple', existingArray);
console.log(result2);  // Output: ['banana', 'apple']

// Example 3: Passing a falsy value (null)
let result3 = addItemToArray('apple', null);
console.log(result3);  // Output: ['apple']

// Example 4: Passing an empty string
let result4 = addItemToArray('apple', '');
console.log(result4);  // Output: ['apple']
