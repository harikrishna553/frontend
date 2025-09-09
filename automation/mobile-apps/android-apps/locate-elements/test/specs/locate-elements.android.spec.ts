describe('locate-elements: accessibility id examples', () => {
  it('should open the app, tap the Media menu, and assert the Media Player header', async () => {
    // Locate the Media menu button by accessibility id
    const mediaMenuButton = await $('~Media');
    await mediaMenuButton.waitForDisplayed({ timeout: 5000 });
    await mediaMenuButton.click();

    // Locate the Media Player header by accessibility id
    const mediaPlayerHeader = await $('~MediaPlayer');
    await mediaPlayerHeader.waitForDisplayed({ timeout: 5000 });

    // Assert that the Media Player header is displayed
    await expect(mediaPlayerHeader).toBeDisplayed();
  });
});
