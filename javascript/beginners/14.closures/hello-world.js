function outerFunction() {
  let outerVariable = "I am defined at Outer Layer Scope";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I am defined at Outer Layer Scope"
