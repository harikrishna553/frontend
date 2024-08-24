function introduce(greeting, ...names) {
  return `${greeting}, ${names.join(' and ')}!`;
}

// Output: Hello, Alice and Bob!
console.log(introduce('Hello', 'Hari', 'Ram')); 

// Output: Hi, John and Jane and Doe!
console.log(introduce('Hi', 'Hari', 'Ram', 'Krishna')); 

