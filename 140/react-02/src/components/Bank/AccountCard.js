
import React from 'react';
import AcctDeleteBtn from './AcctDeleteBtn.js';
import DepositBtn from './DepositBtn.js';
import WithdrawBtn from './WithdrawBtn.js';
import './AccountCard.css';


class AccountCard extends React.Component{
    

    
    render(){
        return (
        <div className="clAccountCard">    
            <div className="AccountCard">
                <div>
                    <div id="idAccountName">
                    {this.props.name}
                    </div>
                    <div>
                    Balance: {this.props.balance}
                    </div>
                </div>
                <div >
                    <DepositBtn />
                    <WithdrawBtn />
                </div>
                <div >
                    <AcctDeleteBtn />
                </div>
            </div>
        </div>
        );
    }
}

export default AccountCard;