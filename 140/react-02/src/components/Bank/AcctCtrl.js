import React from 'react';
import AccountCard from './AccountCard.js'

 class Account {
    constructor (name, balance, key){
        this.name= name;
        this.balance= balance;
        this.key= key;
    }
    deposit (depositAmount){
        this.balance= Number(this.balance)+ Number(depositAmount);
    }
    withdraw (withdrawAmount){
        this.balance=this.balance-withdrawAmount;
    }
    
}
 class accountController {
    constructor (){
        this.accountArr=[];
        this.counter1=1;
    }
    addAccount (name){
        let newAccount= new Account(name,0,this.counter1);
        this.accountArr.push(newAccount); 
        this.counter1++;
    }
    removeAccount (name){
        //iterate through the array that contains all the acocunts, then look at the values of the objects, if the object contains the given name, remove that object.
        let toBeDeletedPos;        
        for (let i=0;i<this.accountArr.length;i++){
            // console.log(Object.values(this.accountArr[i]));
            let val = Object.values(this.accountArr[i]); 
            // console.log(val);
            // console.log(name + "from account");
            // console.log(val.includes(name))                               
            if (val.includes(name)) {
                toBeDeletedPos= i;
                this.accountArr.splice(toBeDeletedPos,1);
            } else {
                console.log("error");
            }
        }
    }
    renameAccount (name,newName) {
    // iterate through all accounts in the account array for the 'name' account. Give this account the newName.
        for (let i=0;i<this.accountArr.length;i++){
            let val = Object.values(this.accountArr[i]); 
            if (val.includes(name)) {
                this.accountArr[i].name= newName;
            } 
        }
    }
    totalAccounts () {
        // iterate through all acocunts in account array, find balance, sum them all up
        let sum=0;
        for (let i=0;i<this.accountArr.length;i++){
            let bal = this.accountArr[i].balance;
            // console.log(this.accountArr[i].balance)
            sum= sum+bal;            
            }
        return sum;    
    }
    highlightAccountWithHighestValue (){
        let arrayHighest =0;
        for (let i=0;i<this.accountArr.length;i++){
            let high = this.accountArr[0].balance;
            let current = this.accountArr[i].balance;
            if (high< current) {
                high =current;
                arrayHighest = i;
            }
        }
        return arrayHighest;
    }
    highlightAccountWithLowestValue () {
        let arrayLowest =0;
        for (let i=0;i<this.accountArr.length;i++){
            let low = this.accountArr[0].balance;
            let current = this.accountArr[i].balance;
            if (low> current) {
                low =current;
                arrayLowest = i;
            }
        }
        return arrayLowest;
    }
}

const BankAccount = new accountController();

BankAccount.addAccount("test1");
BankAccount.addAccount("test2");


class AcctCtrl extends React.Component{
    constructor(props){
        super(props);
        this.newAccountPress = this.newAccountPress.bind(this);
        this.state ={
            accounts: BankAccount.accountArr,

        };
    }

    newAccountPress(){
            console.log("pressed");
            BankAccount.addAccount();
            this.setState({accounts: BankAccount.accountArr})
    }
        
    render(){
        let cards = [];
        let size = this.state.accounts.length;
        for (let i=0;i<size;i++){
            cards.push(<AccountCard name={this.state.accounts[i].name} balance={this.state.accounts[i].balance}/>)
        }
        
        return (
        <div>
            <button id="idNewAccount" onClick={this.newAccountPress}>New Account</button>
            {cards}
            {/* <div>
            this is from the controller array: {BankAccount.accountArr[0].name}
              </div>
              <div>
            this is from the state: {this.state.accounts[0].name}
              </div> */}
        </div>
        
        );
    }
}



export default AcctCtrl;