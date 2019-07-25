import Account from './Account';

// Test #1 - Create class and test account (savingsAccount)
		// - ensure code creates account
test('Test Account', () => {
	console.log('Testing create account');
	const checkingAccount = new Account(1,"checking account", 25);
	expect(checkingAccount.Balance).toBe(25);
	expect(checkingAccount.acctName).toBe("checking account");
	console.log('Testing deposit');

	checkingAccount.deposit(10);
	expect(checkingAccount.Balance).toBe(35);
	console.log('Testing withdraw');
	
	checkingAccount.withdraw(5);
	expect(checkingAccount.Balance).toBe(30);
	
});



