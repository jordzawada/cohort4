import Account from './account.js';

const account1= new Account('Jan' ,25);

test('test the basics', () => {
    expect(account1.name).toBe('Jan');
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