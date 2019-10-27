
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}


class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}


class Withdrawal extends Transaction {

  get value() {
    return ~this.amount;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

console.log('Starting Balance:', myAccount.balance);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

t2 = new Withdrawal(9.99, myAccount);
t2.commit();

t3 = new Deposit(120.00, myAccount);
t3.commit();

console.log('Final Balance:', myAccount.balance);
