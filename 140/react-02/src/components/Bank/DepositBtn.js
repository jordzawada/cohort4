import React from 'react';

class DepositBtn extends React.Component{
    constructor(props) {
        super(props);
        this.onDepositTextChange = this.onDepositTextChange.bind(this);
        this.state = {
  
        };
      }
      onDepositTextChange(e) {
        this.props.onDepositTextChange(e.target.value);
      }
      
    render(){
        return(
        <div>
        <button onClick={this.props.onDepositClick} >Deposit</button>
        <input name="deposit" placeholder="Amount" value={this.props.depositText} onChange={this.onDepositTextChange} ></input>
        </div>
        );
    }
}

export default DepositBtn;