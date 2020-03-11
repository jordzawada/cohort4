import {Account,accountController} from './account.js';

const account1= new Account('chq' ,25);
const accountController1= new accountController();
// These test the withdraw and dposits methods

test('test the basics', () => {
    expect(account1.name).toBe('chq');
    expect(account1.balance).toBe(25);
});
test('test deposit method', () => {
    let x= 10;
    account1.deposit(x);
    
    expect(account1.balance).toBe(35)
});
test('test withdraw method', () => {
    let x= 30;
    account1.withdraw(x);
    
    expect(account1.balance).toBe(5)
});

test('test acocunt controller', () => {    
    accountController1.addAccount("sav");
    accountController1.addAccount("car");
    console.log(accountController1);
    
    expect(accountController1.account.name).toBe("sav");
    
    
    // expect(manyAccounts.orderAccounts[0]).toBe();
    
});


