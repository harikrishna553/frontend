class InsufficientFundsError extends Error {
  constructor(balance: number, amount: number) {
    super(`Cannot withdraw ${amount}. Current balance: ${balance}`);
    this.name = "InsufficientFundsError";
  }
}

function withdraw(balance: number, amount: number) {
  if (amount > balance) {
    throw new InsufficientFundsError(balance, amount);
  }
  return balance - amount;
}

// Usage
try {
  withdraw(100, 200);
} catch (err) {
  if (err instanceof InsufficientFundsError) {
    console.log("Transaction failed:", err.message);
  }
}
