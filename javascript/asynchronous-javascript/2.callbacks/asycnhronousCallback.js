function registerUser() {
    console.log("Validation of user details successful");
    console.log("Save User details");

    // Start both tasks asynchronously
    sendEmailAsync(() => {
        console.log("Email process completed."); // Callback after email is sent
    });

    sendWelcomeKit();
}

// Simulate sending an email asynchronously with a callback
function sendEmailAsync(callback) {
    setTimeout(() => {
        console.log("Sent confirmation to the user (Email sent after 3 seconds)");
        callback(); // Notify that the email process is complete
    }, 3000); // Simulate a 3-second delay
}

// Simulate sending the welcome kit immediately
function sendWelcomeKit() {
    console.log("Sent Welcome Kit");
}

// Register the user
registerUser();
