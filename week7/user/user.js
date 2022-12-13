class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email = emailAddress;
        this.accountBalance= 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    displayBalance() {
        console.log(this.accountBalance);
    }
    transferMoney(amount, User) {
        this.accountBalance -= amount;
        User.accountBalance += amount;
    }
}

const angela = new User("Angela Bereski", "a@b.com");
const kyle = new User("Kyle Og", "k@o.com");
const marshall = new User("Marshall Hoke", "m@h.com");

angela.makeDeposit(50);
angela.makeDeposit(250);
angela.makeDeposit(100);
angela.makeWithdrawal(100);
angela.displayBalance();

kyle.makeDeposit(125);
kyle.makeDeposit(75);
kyle.makeWithdrawal(25);
kyle.makeWithdrawal(25);
kyle.displayBalance();

marshall.makeDeposit(250);
marshall.makeWithdrawal(25);
marshall.makeWithdrawal(25);
marshall.makeWithdrawal(100);
marshall.displayBalance();

angela.transferMoney(25, marshall);
angela.displayBalance();
marshall.displayBalance();