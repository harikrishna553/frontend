if (true) {
    let blockScopedVar = "I'm a block-scoped variable!";
    console.log(blockScopedVar);
}

try{
    console.log(blockScopedVar); // This will throw an error: Uncaught ReferenceError: blockScopedVar is not defined
}
catch(e){
    console.log('Error occurred while accessing functionScopedVar outside of the function.\n\tError: ' + e.message)
}
