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
    let newName = event.target.parentNode.getElementsByTagName("input")[0].value;
    usersAccounts.renameAccount(name,newName);
    DOMname.textContent = newName;
     
 }
 
 const deposit = () => {
    let targetName= event.target.parentNode.getElementsByClassName("accountName")[0].textContent;
    let inputDeposit = event.target.parentNode.getElementsByClassName("deposit")[0].value;
    for (let i=0;i<usersAccounts.accountArr.length;i++){
        let val = Object.values(usersAccounts.accountArr[i]);                             
        if (val.includes(targetName)) {
            usersAccounts.accountArr[i].deposit(inputDeposit);
            event.target.parentNode.getElementsByClassName("balance")[0].textContent ="Balance: "+ Number(usersAccounts.accountArr[i].balance);
        } 
    }
 }
const withdraw = () => {
     let targetName= event.target.parentNode.getElementsByClassName("accountName")[0].textContent;
    let inputWithdraw = event.target.parentNode.getElementsByClassName("withdraw")[0].value;
    for (let i=0;i<usersAccounts.accountArr.length;i++){
        let val = Object.values(usersAccounts.accountArr[i]);                             
        if (val.includes(targetName)) {
            usersAccounts.accountArr[i].withdraw(inputWithdraw);
            event.target.parentNode.getElementsByClassName("balance")[0].textContent = "Balance: "+ Number(usersAccounts.accountArr[i].balance);
        } 
    }    
 }

 const total = () => {
    let totalAll = usersAccounts.totalAccounts();
    console.log(totalAll);
    document.getElementById("hTotal").textContent ="$"+ totalAll;
 }

 const highlightHigh = () => {
    let highAccount = usersAccounts.highlightAccountWithHighestValue();
    let name = usersAccounts.accountArr[highAccount].name;
    let tagList = document.getElementsByTagName("h3");
    for (let i=0;i<tagList.length; i++){
        if (tagList[i].textContent===name){
            tagList[i].id="highest";
        }
    }
    
 }
 const highlightLow = () => {
    let lowAccount = usersAccounts.highlightAccountWithLowestValue();
    let name = usersAccounts.accountArr[lowAccount].name;
    let tagList = document.getElementsByTagName("h3");
    for (let i=0;i<tagList.length; i++){
        if (tagList[i].textContent===name){
            tagList[i].id="lowest";
        }
    }
 }

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
    } else if(event.target.id==="total") {
        total();
    } else if(event.target.id==="high") {
        highlightHigh();
    } else if(event.target.id==="low") {
        highlightLow();
    } 
}

document.body.addEventListener('click', allFuncs)

// remove1.addEventListener('click',remove);
// renameButton.addEventListener('click',renameAccount);
// addAccounts.addEventListener('click',addAnAccount);





