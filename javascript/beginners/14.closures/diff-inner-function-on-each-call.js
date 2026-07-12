function outerFunction(name) {
  let count = 0;

  function innerFunction(name) {
    count++;
    console.log(`Closure : ${name}, Count is ${count}`);
  }

  return () => innerFunction(name);
}

const myClosure1 = outerFunction("Closure1");
const myClosure2 = outerFunction("Closure2");

myClosure1();
myClosure2();

myClosure1();
myClosure2();

myClosure1();
myClosure2();
