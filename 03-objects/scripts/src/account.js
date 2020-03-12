

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
        this.accountArr=[];
    }
    addAccount (name){
        let newAccount= new Account(name,0);
        this.accountArr.push(newAccount);
        
    }
    removeAccount (name){
        for (i=0;i<accountArr.length;i++){
            if 
        }
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


