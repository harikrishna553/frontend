describe("Find element by class name", () => {
    it("should get the first TextView element and check its text", async () => {
        // Find the first matching element with class name android.widget.TextView
        const firstTextView = await $("android.widget.TextView");

        // Get the text from that element
        const textValue = await firstTextView.getText();
        console.log("First TextView text is:", textValue);

        // Assert that the text equals 'Accessibility'
        await expect(firstTextView).toHaveText("API Demos");
    });
});

describe("Find multiple elements by class name", () => {
    it("should collect and verify all TextView labels", async () => {
        // Get all TextView elements
        const textViews = await $$("android.widget.TextView");

        // Collect the text from each element
        const labels: string[] = [];
        for (const element of textViews) {
            labels.push(await element.getText());
        }

        // Print results
        console.log("Total TextViews found:", labels.length);
        console.log("Labels:", labels);

        // Assertions
        // 1. Verify total number of TextViews
        expect(labels.length).toBe(13);

        // 2. Verify the first label is "API Demos"
        expect(labels[0]).toBe("API Demos");

        // 3. Verify that some important labels are present
        expect(labels).toEqual(
            expect.arrayContaining(["Accessibility", "Animation", "Views"])
        );

        // 4. Verify that an unexpected label does NOT exist
        expect(labels).not.toContain("Settings");
    });
});
