import React from "react";
// import { ThemeContextConsumer } from "../../ThemeContext.js";
import { SketchPicker } from "react-color";
import { ThemeContext } from "../../ThemeContext.js";
// import { render } from "@testing-library/react";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
    };
  }

  // handleChangeComplete = (inputcolor) => {
  //   // console.log(inputcolor.hex);
  //   this.setState({ color: inputcolor.hex });
  //   // console.log(this.state.color);
  // };

  render() {


    return (
      <div>
        <h1>fun stuff</h1>
        <ThemeContext.Consumer>
          {(context) => {
            const { changeColor } = context;
            const setColor = () => {
              changeColor("black");
              // changeColor(this.state.color);
              // console.log("clicked");
            };
            return (
              <div>
                <h1>Theme Settings </h1>
                <hr />
                <li>Text Color</li>
                <div id="idColorPicker">
                  {/* <SketchPicker
                  color={this.state.color}
                  onChangeComplete={this.handleChangeComplete}
                /> */}
                  <button onClick={setColor}>
                    Set Color to {this.state.color}
                  </button>
                </div>
                <li>Font</li>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Settings;
