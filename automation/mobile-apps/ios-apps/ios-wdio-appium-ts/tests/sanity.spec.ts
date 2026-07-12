describe("Sanity test for iOS app", () => {
  it("should launch TestApp, wait 10 seconds, and quit", async () => {
    console.log("App launched. Waiting for 10 seconds...");
    await browser.pause(10000);
    console.log("Done waiting, test will now exit.");
  });
});

