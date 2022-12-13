class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email = emailAddress;
        this.accountBalance= 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log(this.accountBalance);
        return this;
    }
    transferMoney(amount, User) {
        this.accountBalance -= amount;
        User.accountBalance += amount;
        return this;
    }
}

const angela = new User("Angela Bereski", "a@b.com");
const kyle = new User("Kyle Og", "k@o.com");
const marshall = new User("Marshall Hoke", "m@h.com");

angela.makeDeposit(50).makeDeposit(250).makeDeposit(100).makeWithdrawal(100).transferMoney(25, marshall).displayBalance();

kyle.makeDeposit(125).makeDeposit(75).makeWithdrawal(25).makeWithdrawal(25).displayBalance();

marshall.makeDeposit(250).makeWithdrawal(25).makeWithdrawal(25).makeWithdrawal(100).displayBalance();
