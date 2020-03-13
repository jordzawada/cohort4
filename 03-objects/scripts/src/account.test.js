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

test('test acocunt controller add and remove', () => {    
    accountController1.addAccount("sav");
    accountController1.addAccount("car");
    let x= accountController1.accountArr.length-1;
    expect(accountController1.accountArr[0].name).toBe("sav");
    expect(accountController1.accountArr[x].name).toBe("car");
    // this order of the following test and the preceding test is important
    // trying to delete the sav account, this shold mean that only the car account remains.
    accountController1.removeAccount("sav");
    expect(accountController1.accountArr[0].name).toBe("car");
    accountController1.removeAccount("car");
    // remove car now, should be an empty array
    expect(accountController1.accountArr.length).toBe(0);
});

test('test acocunt controller rename,total, high,low', () =>{    
    accountController1.addAccount("chq");
    accountController1.renameAccount("chq","rose");
    expect(accountController1.accountArr[0].name).toBe("rose");
    // make new accounts and add funds
    accountController1.addAccount("sav");
    accountController1.addAccount("car");
    accountController1.accountArr[0].deposit(10);
    accountController1.accountArr[1].deposit(20);
    accountController1.accountArr[2].deposit(30);
    expect(accountController1.totalAccounts()).toBe(60);
    // highlight account with highest value, probably best to show account array i'th position. For the current setup, that's the car account. Same with lowest but in the other order.
    expect(accountController1.highlightAccountWithHighestValue()).toBe(2);
    expect(accountController1.highlightAccountWithLowestValue()).toBe(0);  
    // add two new acocunts to do more test cases!
    accountController1.addAccount("really large account");
    accountController1.addAccount("0 account");
    accountController1.accountArr[3].deposit(100);
    accountController1.accountArr[4].deposit(0);
    console.log(accountController1.accountArr)
    expect(accountController1.highlightAccountWithHighestValue()).toBe(3);
    expect(accountController1.highlightAccountWithLowestValue()).toBe(4);  
});
