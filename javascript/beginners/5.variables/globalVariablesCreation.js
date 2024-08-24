var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am global and constant";

function checkGlobal() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

checkGlobal();

function makeGlobal() {
    globalVarWithoutKeyword = "I am global without var, let or const";
}

makeGlobal();
console.log(globalVarWithoutKeyword);
