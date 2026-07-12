describe('locate-elements: UiSelector examples', () => {
  it('should open the app, tap the Media menu, and assert the Media Player header', async () => {
    // Locate the Media menu button by text
    const mediaMenuButton = await $(`android=new UiSelector().text("Media")`);
    await mediaMenuButton.waitForDisplayed({ timeout: 5000 });
    await mediaMenuButton.click();

    // Locate the Media Player header by text
    const mediaPlayerHeader = await $(`android=new UiSelector().text("MediaPlayer")`);
    await mediaPlayerHeader.waitForDisplayed({ timeout: 5000 });

    // Assert that the Media Player header is displayed
    await expect(mediaPlayerHeader).toBeDisplayed();
  });
});


describe("Find element by UiSelector className", () => {
  it("should get the first TextView element and check its text", async () => {
    // Find the first TextView element
    const firstTextView = await $(`android=new UiSelector().className("android.widget.TextView").instance(0)`);

    // Get the text from that element
    const textValue = await firstTextView.getText();
    console.log("First TextView text is:", textValue);

    // Assert that the text equals 'API Demos'
    await expect(firstTextView).toHaveText("API Demos");
  });
});
