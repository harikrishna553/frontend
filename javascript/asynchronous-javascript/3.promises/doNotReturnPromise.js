const promise = new Promise((resolve, reject) => {
  resolve("Task1");
});

promise
  .then((task) => {
    console.log(`${task} finished execution`);
    return "Taks2";
  })
  .then((task) => {
    console.log(`${task} finished execution`);
    return "Taks3";
  })
  .then((task) => {
    console.log(`${task} finished execution`);
  })
  .finally(() => {
    console.log("All tasks finished execution");
  });
