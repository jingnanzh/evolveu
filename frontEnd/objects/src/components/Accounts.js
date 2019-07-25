import Account from './Account';

class Accounts {
	constructor(props) {
		this.acctList = [];
		this.counter = 0;
	}
	
	addAccount(acctName, Balance) {
		const newAccount = new Account(this.counter, acctName, Balance);
		this.acctList.push(newAccount);		
		this.counter++;
	}
	
	findAcctID(i) {
		let x = this.acctList.findIndex(function(e){
			return e.acctID ===i
		})
		return x;
	}

	delAccount(acctID) {
		// console.log("acctid", acctID)
		// console.log("before splice",this.acctList)
		this.acctList.splice(this.findAcctID(acctID),1)
		// console.log("after splice",this.acctList)
		return this.acctList;
	}

	nameAccount(id, newName) {
		this.acctList.forEach(item => {
			// console.log("before rename", item, item.acctName, item.acctID, acctID)
			// console.log("item.acctName is ", item.acctName)
			if(item.acctID===id) {
				item.acctName = newName
				// console.log("after rename", item.acctName)
				return				
			}
		})		
	}

	getMaxAccount(acctList) {
		if (this.acctList.length>0) {
			return this.acctList.reduce(function (acct1, acct2) {
			return ( acct1.Balance > acct2.Balance ? acct1 : acct2 );
	 		});		
		} return 0;
			
	}
	
	getMinAccount(acctList) {
		if (this.acctList.length>0) {
			return this.acctList.reduce(function (acct1, acct2) {
			return ( acct1.Balance < acct2.Balance ? acct1 : acct2 );
		 	});	
		}	return 0;
	}

	getTotalBalance() {
		var initialBalance = 0;
		var TotalBalance = this.acctList.reduce(function (accumulator, account) {
			// console.log('accumulator', accumulator)
    		return Number(accumulator) + Number(account.Balance);
		}, initialBalance)
		return TotalBalance;
	
	}
	
	depositAccount(id, amount) {
		this.acctList.forEach(item => {
			if(item.acctID === id) {
				item.deposit(amount);
				return 
			}
		})
	}

	withdrawAccount(id, amount) {
		this.acctList.forEach(item => {
			if(item.acctID === id) {
				item.withdraw(amount);
				return
			}
		})
	}

}

export default Accounts;