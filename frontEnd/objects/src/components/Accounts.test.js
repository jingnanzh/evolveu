
import Account from './Account';
import Accounts from './Accounts';

test('Test the Accounts', () => {
	let account1 = new Accounts();
	console.log(account1);
	

console.log("testing the add account, add a RESP account");
account1.addAccount("RESP", 500);
expect(account1.acctList[0]).toEqual({acctName: "RESP",Balance:500,acctID:0});
expect(account1.acctList.length).toBe(1);
console.log(account1);

console.log("add a saving account");
account1.addAccount("Saving",1000);
expect(account1.acctList[1]).toEqual({acctName: "Saving",Balance:1000,acctID:1});
expect(account1.acctList.length).toBe(2);
// console.log(account1);


console.log("add a GIC account");
account1.addAccount("GIC",900);
expect(account1.acctList[2]).toEqual({acctName: "GIC",Balance:900,acctID:2});
expect(account1.acctList.length).toBe(3);
// console.log(account1);


console.log("delete the saving account");
account1.delAccount(1);
expect(account1.acctList[0]).toEqual({acctName: "RESP",Balance:500,acctID:0});
expect(account1.acctList.length).toBe(2)
// console.log(account1)

console.log("add a NEW account");
account1.addAccount("NEW", 600);
expect(account1.acctList[2]).toEqual({acctName: "NEW",Balance:600,acctID:3});
expect(account1.acctList.length).toBe(3)
// console.log(account1);

console.log("name the account");
account1.nameAccount(0, "MyRESP");
expect(account1.acctList[0]).toEqual({acctName:"MyRESP", Balance:500,acctID:0});
console.log(account1);

// console.log("name the account");
// expect(account1.getMaxAccout()).toEqual({acctName: "GIC",Balance:900,acctID:2})


console.log("getMaxAccout");
account1.getMaxAccount();
expect(account1.getMaxAccount()).toEqual({acctName: "GIC",Balance:900,acctID:2})

console.log("getMinAccout");
account1.getMinAccount();
expect(account1.getMinAccount()).toEqual({acctName: "MyRESP",Balance:500,acctID:0})

console.log("getMinAccout");
account1.getMinAccount();
expect(account1.getMinAccount()).toEqual({acctName: "MyRESP",Balance:500,acctID:0})

console.log("getTotalBalance");
account1.getTotalBalance();
expect(account1.getTotalBalance()).toEqual(2000)

console.log('depositAccount')
account1.depositAccount(0, 500);
expect(account1.acctList[0]).toEqual({acctName:"MyRESP", Balance:1000,acctID:0});

console.log("withdrawAccount")
account1.withdrawAccount(0, 500);
expect(account1.acctList[0]).toEqual({acctName:"MyRESP", Balance:500,acctID:0});
});

	