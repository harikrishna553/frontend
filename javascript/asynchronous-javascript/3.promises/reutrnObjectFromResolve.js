const promise = new Promise((resolve) => {
    console.log("Executing Promise");
    console.log("Read the user data from external url");
    resolve({id : 1, name: "Krishna"});
});

promise.then((result) => {
    console.log(result);
}).finally(() => {
    console.log("Cleanup the resources.....")
});