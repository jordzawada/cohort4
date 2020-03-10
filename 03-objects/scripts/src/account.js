// const classes = {

//     name : () => {
        
        
//     },


    

// }

class Account {
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

export default Account;