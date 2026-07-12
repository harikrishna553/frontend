const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetching data...");
    resolve({ userId: 1, name: "Alice" });
  }, 1000); // Simulate 1 second delay
});

fetchData
  .then((userData) => {
    console.log("User data:", userData);
    // Return a new promise, simulating fetching user's posts

    setTimeout(() => {
      console.log("Fetching user's posts...");
    }, 3000); // Simulate another delay
  })
  .then((posts) => {
    console.log("User's posts:", posts);
    // Return a new promise, simulating fetching comments for the first post

    setTimeout(() => {
      console.log("Fetching comments for Post 1...");
    }, 1000); // Simulate another delay
  })
  .then((comments) => {
    console.log("Comments on Post 1:", comments);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  })
  .finally(() => {
    console.log("Cleaning up resources");
  });
