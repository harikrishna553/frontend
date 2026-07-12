const createPromise = (state) => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("Reading the data from file completed successfully");
    } else {
      reject("Operation failed while reading the data");
    }
  });
};

createPromise(false)
  .then((result) => console.log(result))
  .catch((result) => console.log(result))
  .finally(() => {
    console.log("Cleaning up resources...");
  });
