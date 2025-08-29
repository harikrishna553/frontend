class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Getter
  public getBalance(): number {
    return this.balance;
  }

  // Deposit money with validation
  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Amount must be greater than zero.");
      return;
    }
    this.balance += amount;
  }

  // Withdraw money with validation
  public withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else {
      this.balance -= amount;
    }
  }
}

const myAccount = new BankAccount(1000);

myAccount.deposit(500); //
console.log(myAccount.getBalance()); // 1500

myAccount.withdraw(2000); // Insufficient balance
myAccount.withdraw(300); 
console.log(myAccount.getBalance()); // 1200
