describe("Navigation under Content section", () => {
  it("should display correct navigation labels when Content is tapped", async () => {
    // Step 1: Tap on the "Content" element
    const contentElement = await $("//android.widget.TextView[@content-desc='Content']");
    await contentElement.click();

    // Step 2: Capture all navigation labels by class name
    const navigationItems = await $$("//android.widget.TextView");

    // Step 3: Extract the text of each item
    const labels = [];
    for (let item of navigationItems) {
      labels.push(await item.getText());
    }

    // Step 4: Expected labels
    const expectedLabels = ["Assets", "Clipboard", "Packages", "Provider", "Resources", "Storage"];

    // Step 5: Assertion
    expect(labels).toEqual(expect.arrayContaining(expectedLabels));

    // Optional: Print them for debugging
    console.log("Navigation labels found:", labels);
  });
});
