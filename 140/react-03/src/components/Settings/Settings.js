import React from "react";
// import { ThemeContextConsumer } from "../../ThemeContext.js";
import { SketchPicker } from "react-color";
import ThemeContext from "../../ThemeContext.js";
// import { render } from "@testing-library/react";

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
    };
  }

  handleChangeComplete = (inputcolor) => {
    // time.changeColor(color.hex)
    this.setState({ color: inputcolor });
  };
  render() {
    return (
      // <ThemeContextConsumer>

      <div>
        <h1>Theme Settings </h1>
        {/* <p>{time.time1}</p> */}
        {/* <button onClick={timeChange}>Click</button> */}
        <hr />
        <li>Text Color</li>
        <div id="idColorPicker">
          <SketchPicker
            color={this.color}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
        <li>Font</li>
      </div>

      //  </ThemeContextConsumer>
    );
  }
}

// Settings.contextType = ThemeContext;

export default Settings;

//  {(context) => (
// )}
