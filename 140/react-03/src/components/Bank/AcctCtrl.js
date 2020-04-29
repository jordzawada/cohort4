import React from "react";
import AccountCard from "./AccountCard.js";

export class Account {
  constructor(name, balance, key) {
    this.name = name;
    this.balance = balance;
    this.key = key;
  }
  deposit(depositAmount) {
    this.balance = Number(this.balance) + Number(depositAmount);
  }
  withdraw(withdrawAmount) {
    this.balance = this.balance - withdrawAmount;
  }
}
class accountController {
  constructor() {
    this.accountArr = [];
    this.counter1 = 1;
  }
  addAccount(name, balance) {
    if (balance === undefined) {
      balance = 0;
    }
    let newAccount = new Account(name, balance, this.counter1);
    this.accountArr.push(newAccount);
    this.counter1++;
  }
  removeAccount(name) {
    //iterate through the array that contains all the acocunts, then look at the values of the objects, if the object contains the given name, remove that object.
    let toBeDeletedPos;
    for (let i = 0; i < this.accountArr.length; i++) {
      // console.log(Object.values(this.accountArr[i]));
      let val = Object.values(this.accountArr[i]);
      // console.log(val);
      // console.log(name + "from account");
      // console.log(val.includes(name))
      if (val.includes(name)) {
        toBeDeletedPos = i;
        this.accountArr.splice(toBeDeletedPos, 1);
      } else {
        console.log("error");
      }
    }
  }
  renameAccount(name, newName) {
    // iterate through all accounts in the account array for the 'name' account. Give this account the newName.
    for (let i = 0; i < this.accountArr.length; i++) {
      let val = Object.values(this.accountArr[i]);
      if (val.includes(name)) {
        this.accountArr[i].name = newName;
      }
    }
  }
  totalAccounts() {
    // iterate through all acocunts in account array, find balance, sum them all up
    let sum = 0;
    for (let i = 0; i < this.accountArr.length; i++) {
      let bal = this.accountArr[i].balance;
      // console.log(this.accountArr[i].balance)
      sum = sum + bal;
    }
    return sum;
  }
  highlightAccountWithHighestValue() {
    let arrayHighest = "blank";
    for (let i = 0; i < this.accountArr.length; i++) {
      let high = this.accountArr[0].balance;
      let current = this.accountArr[i].balance;
      if (high <= current) {
        high = current;
        arrayHighest = this.accountArr[i].name;
      }
    }
    return arrayHighest;
  }
  highlightAccountWithLowestValue() {
    let arrayLowest = "blank";
    for (let i = 0; i < this.accountArr.length; i++) {
      let low = this.accountArr[0].balance;
      let current = this.accountArr[i].balance;
      if (low >= current) {
        low = current;
        arrayLowest = this.accountArr[i].name;
      }
    }
    return arrayLowest;
  }
}

const BankAccount = new accountController();

BankAccount.addAccount("test1", 30);
BankAccount.addAccount("test2", 25);

class AcctCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.newAccountPress = this.newAccountPress.bind(this);
    this.handleDepositClick = this.handleDepositClick.bind(this);
    this.handleDespositTextChange = this.handleDespositTextChange.bind(this);
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this);
    this.handleWithdrawTextChange = this.handleWithdrawTextChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleNameTextChange = this.handleNameTextChange.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.state = {
      accounts: BankAccount.accountArr,
      highest: BankAccount.highlightAccountWithHighestValue(),
      lowest: BankAccount.highlightAccountWithLowestValue(),
      depositValue: "",
      withdrawValue: "",
      total: BankAccount.totalAccounts(),
      name: "",
    };
  }

  newAccountPress() {
    BankAccount.addAccount();
    this.setState({ accounts: BankAccount.accountArr });
  }

  handleDespositTextChange(Text) {
    this.setState({
      depositValue: Text,
    });
  }

  handleNameTextChange(Text) {
    this.setState({
      name: Text,
    });
  }

  handleDeleteClick(key) {
    console.log(key);
    BankAccount.removeAccount(key);
    this.setState({});
  }

  handleNameClick(newname, key) {
    let size = BankAccount.accountArr.length;
    for (let i = 0; i < size; i++) {
      if (key === this.state.accounts[i].key) {
        BankAccount.renameAccount(key, newname);
        this.setState({ name: "",
        highest: BankAccount.highlightAccountWithHighestValue(),
        lowest: BankAccount.highlightAccountWithLowestValue(),
       });
      }
    }
  }

  handleDepositClick(key) {
    let size = BankAccount.accountArr.length;
    for (let i = 0; i < size; i++) {
      if (key === this.state.accounts[i].key) {
        BankAccount.accountArr[i].deposit(this.state.depositValue);
        this.setState({ depositValue: "" });
        alert(
          `Deposited $${this.state.depositValue} to ${this.state.accounts[i].name}`
        );
        this.setState({
          highest: BankAccount.highlightAccountWithHighestValue(),
          lowest: BankAccount.highlightAccountWithLowestValue(),
          total: BankAccount.totalAccounts(),
        });
        
      }
    }
  }

  handleWithdrawTextChange(Text) {
    this.setState({
      withdrawValue: Text,
    });
  }

  handleWithdrawClick(key) {
    let size = BankAccount.accountArr.length;
    for (let i = 0; i < size; i++) {
      if (key === this.state.accounts[i].key) {
        BankAccount.accountArr[i].withdraw(this.state.withdrawValue);
        this.setState({ withdrawValue: "" });
        alert(
          `Withdrew $${this.state.withdrawValue} to ${this.state.accounts[i].name}`
          
        );
        this.setState({
          highest: BankAccount.highlightAccountWithHighestValue(),
          lowest: BankAccount.highlightAccountWithLowestValue(),
          total: BankAccount.totalAccounts(),
        });
      }
    }
  }

  render() {
    let cards = [];
    let size = this.state.accounts.length;
    for (let i = 0; i < size; i++) {
      cards.push(
        <AccountCard
          name={this.state.accounts[i].name}
          keys={this.state.accounts[i].key}
          balance={this.state.accounts[i].balance}
          handleDepositClick={() =>
            this.handleDepositClick(this.state.accounts[i].key)
          }
          depositText={this.state.depositValue}
          handleDespositTextChange={this.handleDespositTextChange}
          handleWithdrawClick={() =>
            this.handleWithdrawClick(this.state.accounts[i].key)
          }
          withdrawText={this.state.withdrawValue}
          handleWithdrawTextChange={this.handleWithdrawTextChange}
          delete={() => this.handleDeleteClick(this.state.accounts[i].key)}

          renameText={this.state.name}
          renameClick={this.handleNameClick}
          renameValue={this.handleNameTextChange}
        />
      );
    }

    return (
      <div>
        <div></div>
        <div>Highest Account: {this.state.highest} </div>
        <div>Lowest Account: {this.state.lowest}</div>
        <div>Total of All: ${this.state.total}</div>
        <div>
          <div>
            <button id="idNewAccount" onClick={this.newAccountPress}>
              New Account
            </button>
          </div>
          <div>{cards}</div>
        </div>

      </div>
    );
  }
}

export default AcctCtrl;
