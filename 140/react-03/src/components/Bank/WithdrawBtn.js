import React from 'react';

class WithdrawBtn extends React.Component{
    constructor(props) {
        super(props);
        this.onWithdrawTextChange = this.onWithdrawTextChange.bind(this);
        this.state = {
  
        };
      }
      onWithdrawTextChange(e) {
        this.props.onWithdrawTextChange(e.target.value);
      }

    render(){
        return(
        <div>    
        <button onClick={this.props.onWithdrawClick} >Withdraw</button>
        <input name="withdraw" placeholder="Amount" value={this.props.withdrawText} onChange={this.onWithdrawTextChange} ></input>
        </div>
        );
    }
}

export default WithdrawBtn;