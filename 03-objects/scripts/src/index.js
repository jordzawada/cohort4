import {Account,accountController} from './account.js';

const usersAccounts = new accountController();
usersAccounts.addAccount("Chq");

const cloneAccountNode =()=>{
    let toClone= document.getElementById("accountLower");
    let newNode= toClone.cloneNode(true);
    return newNode;
}
const addAnAccount = () => {
   usersAccounts.addAccount("New Account(Rename Me)");
   let newAccountNode=cloneAccountNode();
   let accountSection = document.getElementById("accountSections");
   newAccountNode.getElementsByClassName("accountName")[0].textContent="New Account(Rename Me)";
   newAccountNode.getElementsByClassName("balance")[0].textContent="Balance: ";
   accountSection.appendChild(newAccountNode);   
   
}
const remove = () => {
    let targetParent= event.target.parentNode.parentNode;
    let name = targetParent.getElementsByClassName("accountName")[0].textContent;
    // console.log(name);
    usersAccounts.removeAccount(name);
    targetParent.remove();
    console.log(usersAccounts);
 }

 const renameAccount = () => {    
    let targetParent= event.target.parentNode.parentNode;
    let DOMname = targetParent.getElementsByClassName("accountName")[0];    
    let name = targetParent.getElementsByClassName("accountName")[0].textContent;
    console.log(name);
    let newName = event.target.parentNode.getElementsByTagName("input")[0].value;
    usersAccounts.renameAccount(name,newName);
    DOMname.textContent = newName;
    console.log(usersAccounts);
 }
 
 const deposit = () => {
    let targetName= event.target.parentNode.getElementsByClassName("accountName")[0].textContent;
    let inputDeposit = event.target.parentNode.getElementsByClassName("deposit")[0].value;
    for (let i=0;i<usersAccounts.accountArr.length;i++){
        let val = Object.values(usersAccounts.accountArr[i]);                             
        if (val.includes(targetName)) {
            console.log(inputDeposit);
            usersAccounts.accountArr[i].deposit(inputDeposit);
            event.target.parentNode.getElementsByClassName("balance")[0].textContent = Number(usersAccounts.accountArr[i].balance);
        } 
    }
    console.log();
    

 }
const withdraw = () => {
     console.log("test withdraw");
     
 }

 const log1 =() => {console.log(event.target)}

// document.body.addEventListener('click', log1)

const allFuncs = () => {
    if (event.target.id==="renameButton") {
        renameAccount();
    } else if (event.target.id==="removeButton"){
        remove ();
    } else if(event.target.id==="addAccounts") {
        addAnAccount();
    } else if(event.target.id==="depositButton") {
        deposit();
    } else if(event.target.id==="withdrawButton") {
        withdraw();
    }
}

document.body.addEventListener('click', allFuncs)

// remove1.addEventListener('click',remove);
// renameButton.addEventListener('click',renameAccount);
// addAccounts.addEventListener('click',addAnAccount);





