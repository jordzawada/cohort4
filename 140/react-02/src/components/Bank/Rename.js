import React from "react";
import TextField from "@material-ui/core/TextField";

class Rename extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
    this.renameValueT = this.renameValueT.bind(this);
    this.state = {};
  }

  renameValueT(e) {
    this.props.renameValue(e.target.value);
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.props.renameClick(this.props.name, this.props.keys);
    }
  }

  render() {
    return (
      <div>
        <TextField
          id={this.props.keys}  
          label="New Name"
          variant="filled"
          onKeyDown={this.keyPress}
          value={this.props.name}
          onChange={this.renameValueT}
        />
      </div>
    );
  }
}

export default Rename;
