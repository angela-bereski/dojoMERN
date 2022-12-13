class BankAccount {
    constructor(intRate, balance) {
        this.intRate = .01;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdraw(amount) {
        this.balance -= amount;
        return this;
    }

    displayAccountInfo() {
        console.log("Balance: $", this.balance)
        return this;
    }

    yieldInterest() {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

const acct1 = new BankAccount();
const acct2 = new BankAccount();

acct1.deposit(100).deposit(100).deposit(50).withdraw(50).yieldInterest().displayAccountInfo();
acct2.deposit(500).deposit(25).withdraw(35).withdraw(15).withdraw(300).withdraw(1).yieldInterest().displayAccountInfo();