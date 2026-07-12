describe('Sample', () => {
    it('sample test', async () => {
        // Just open the application for 5 seconds
        await driver.pause(10000)

        // Close the application
        await driver.terminateApp("com.swaglabsmobileapp")
    })
})

