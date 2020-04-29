import React from 'react';

class AcctDeleteBtn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
  
        };
    }

   
    render(){
        return(
            <div>
                <button onClick={this.props.delete}>Delete</button>
            </div>
        );
    }
}

export default AcctDeleteBtn;