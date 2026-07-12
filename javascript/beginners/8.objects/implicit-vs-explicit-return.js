const userDetails = () => ({
  name: "Krishna",
  age: 36,
});

const personDetails = () => {
  return {
    name: "Ram",
    age: 66,
  };
};

console.log(`userDetails : ${JSON.stringify(userDetails())}`);
console.log(`personDetails : ${JSON.stringify(personDetails())}`);

const add = (a, b) => a + b;
console.log(`Sum of 10 and 20 is ${add(10, 20)}`);
