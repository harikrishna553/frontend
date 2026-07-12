function registerUser(nextActivity) {
  console.log("Validation of user details successful");
  console.log("Save User details");

  // Proceed to the next step (send confirmation email)
  nextActivity(sendWelcomeKit);
}

function sendEmail(nextActivity) {
  console.log("Sent confirmation to the user");

  // Proceed to the next step (send welcome kit)
  nextActivity();
}

function sendWelcomeKit() {
  console.log("Sent Welcome Kit");
}

// Start the registration process, with sending email as the next step
registerUser(sendEmail);
