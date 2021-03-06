import React from "react";
import AcctDeleteBtn from "./AcctDeleteBtn.js";
import DepositBtn from "./DepositBtn.js";
import WithdrawBtn from "./WithdrawBtn.js";
import Rename from "./Rename.js";
import "./AccountCard.css";


class AccountCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   

  render() {
    return (
      <div >
        <div className="AccountCard">
          <div>
            <div id="idAccountName">{this.props.name}</div>
            <div>Balance: ${this.props.balance}</div>
          </div>
          <div>
            <DepositBtn
              onDepositClick={this.props.handleDepositClick}
              depositText={this.props.depositText}
              onDepositTextChange={this.props.handleDespositTextChange}
            />
            <WithdrawBtn
              onWithdrawClick={this.props.handleWithdrawClick}
              withdrawText={this.props.withdrawText}
              onWithdrawTextChange={this.props.handleWithdrawTextChange}
            />
          </div>
          <Rename
            name={this.props.renameText}
            renameClick={this.props.renameClick}
            keys={this.props.keys}
            renameValue={this.props.renameValue}
          />
          <div>
            <AcctDeleteBtn delete={this.props.delete} keys={this.props.keys} />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountCard;
