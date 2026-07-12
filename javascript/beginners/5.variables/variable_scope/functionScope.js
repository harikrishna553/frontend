function exampleFunction() {
    var functionScopedVar = "I'm a function-scoped variable!";
    console.log(functionScopedVar); // This will work.
}

exampleFunction();

try{
  console.log(functionScopedVar); // This will throw an error: Uncaught ReferenceError: functionScopedVar is not defined  
}catch(e){
    console.log('Error occurred while accessing functionScopedVar outside of the function.\n\tError: ' + e.message)
}
