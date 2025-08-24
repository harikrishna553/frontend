function sendNotification(user: string, message: string, method: string = "email") {
  console.log(`Sending "${message}" to ${user} via ${method}`);
}

// Usage examples:

sendNotification("Krishna", "Your order has been shipped");
// Output: Sending "Your order has been shipped" to Krishna via email

sendNotification("Lahari", "Your OTP is 987654", "sms");
// Output: Sending "Your OTP is 987654" to Lahari via sms
