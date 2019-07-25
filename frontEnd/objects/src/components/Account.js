class Account {
    constructor(acctID,acctName, Balance) {
        this.acctName = acctName;
        this.Balance = Balance;      
        this.acctID = acctID; 
       
    }

    deposit(amount) {
        return this.Balance = Number(this.Balance) + Number(amount);
    }

    withdraw(amount) {
        return this.Balance = Number(this.Balance) - Number(amount);
    }

    Balance() {
        return this.Balance;
    }
}

export default Account;
