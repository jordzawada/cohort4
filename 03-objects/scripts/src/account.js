

export class Account {
    constructor (name, balance){
        this.name= name;
        this.balance= balance;
    }
    deposit (depositAmount){
        this.balance= this.balance+ depositAmount;
    }
    withdraw (withdrawAmount){
        this.balance=this.balance-withdrawAmount;
    }
    
}
export class accountController {
    constructor (){
        
    }
    addAccount (name){
        let newAccount= new Account(name,0);
        let x= Object.keys(accountController).length;
        let newAccountKey= "account"+x+1;
        this.{newAccountKey} = newAccount;
    }
    removeAccount (){

    }
    renameAccount () {

    }
    totalAccounts () {

    }
    highlightAccountWithHighestValue (){

    }
    highlightAccountWithLowestValue () {

    }
}


