const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetching user address by email...");
    resolve({ email: "krishna@abc.com" });
  }, 1000); // Simulate 1 second delay
});

fetchData
  .then((userData) => {
    console.log("User data:", userData);
    console.log("Transforming user email to uppercase");
    updatedUserData = {
      email: userData.email.toUpperCase(),
    };
    // Return a new promise, simulating fetching user's posts
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetching user's data by email in uppercase");
        updatedUserData.address = { city: "Bangalore", state: "Karnataka" };
        resolve(updatedUserData);
      }, 1000); // Simulate another delay
    });
  })
  .then((userData) => {
    console.log(JSON.stringify(userData));
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  })
  .finally(() => {
    console.log("Cleaning up resources");
  });
