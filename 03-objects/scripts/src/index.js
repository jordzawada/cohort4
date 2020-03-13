import {Account,accountController} from './account.js';

const usersAccounts = new accountController();

const cloneAccountNode =()=>{
    let toClone= document.getElementById("accountLower");
    let newNode= toClone.cloneNode(true);
    return newNode;
}

const addAnAccount = () => {
   usersAccounts.addAccount("rename me");
   let newAccountNode=cloneAccountNode();
   let accountSection = document.getElementById("accountSections");
   newAccountNode.getElementsByClassName("accountName")[0].textContent="New Account(Rename Me)";
   newAccountNode.getElementsByClassName("balance")[0].textContent="Balance: "+0;

   accountSection.appendChild(newAccountNode);


}


addAccounts.addEventListener('click',addAnAccount);



