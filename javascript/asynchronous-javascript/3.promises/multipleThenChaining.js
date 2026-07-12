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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching user's posts...");
        resolve(["Post 1", "Post 2"]);
      }, 1000); // Simulate another delay
    });
  })
  .then((posts) => {
    console.log("User's posts:", posts);
    // Return a new promise, simulating fetching comments for the first post
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching comments for Post 1...");
        resolve(["Comment 1", "Comment 2"]);
      }, 1000); // Simulate another delay
    });
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
