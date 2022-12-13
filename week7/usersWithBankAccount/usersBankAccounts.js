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

class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email = emailAddress;
        this.account= new BankAccount(0.02, 0);
    }
    makeDeposit(amount) {
        this.account.deposit(amount);
        return this;
    }
    makeWithdrawal(amount) {
        this.account.withdraw(amount);
        return this;
    }
    displayBalance() {
        this.account.displayAccountInfo();
        return this;
    }
}

const angela = new User("Angela Bereski", "a@b.com");
const kyle = new User("Kyle Ogilvie", "k@o.com");

angela.makeDeposit(100).displayBalance();
kyle.makeDeposit(400).makeWithdrawal(25).displayBalance();

