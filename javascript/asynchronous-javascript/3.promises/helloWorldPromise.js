const myPromise = new Promise((resolve, reject) => {
  let success = true;
  console.log("Promise started Execution.....");
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
