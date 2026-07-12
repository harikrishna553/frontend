function processTransaction(amount: number): void {
  try {
    if (amount <= 0) {
      throw new Error("Invalid transaction amount!");
    }
    console.log(`Transaction of $${amount} completed successfully.`);
  } catch (error) {
    console.log("Transaction failed:", (error as Error).message);
  } finally {
    console.log("Closing transaction session...");
  }
}

processTransaction(100);
// Transaction of $100 completed successfully.
// Closing transaction session...

processTransaction(-50);
// Transaction failed: Invalid transaction amount!
// Closing transaction session...
