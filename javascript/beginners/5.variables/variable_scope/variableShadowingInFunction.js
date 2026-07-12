var name = "Global Name";

function displayName() {
    var name = "Local Name";
    console.log(`Inside of displayName function : ${name}`);
}

displayName();

console.log(`Outside of displayName function : ${name}`);