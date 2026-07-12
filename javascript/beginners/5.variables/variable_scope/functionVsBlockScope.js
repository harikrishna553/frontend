function scopeExample() {
    if (true) {
        var functionScopedVar = "I'm function-scoped!";
        let blockScopedVar = "I'm block-scoped!";
        const blockScopedConst = "I'm also block-scoped!";
    }

    console.log(functionScopedVar);

    try{
        console.log(blockScopedVar);
    }catch(e){
        console.log('Error occurred while accessing blockScopedVar\n\tError: ' + e.message)
    }

    try{
        console.log(blockScopedConst);
    }catch(e){
        console.log('Error occurred while accessing blockScopedConst\n\tError: ' + e.message)
    }

}

scopeExample();
