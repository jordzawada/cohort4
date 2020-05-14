import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  
    state = {
      color1: "white",
    }
  

    changeColor=(inputColor)=>{
      console.log("clicked from context");
      // this.setState({color1: this.state.color1 === "white" ? "black" : "white"})
      this.setState({color1: inputColor})
      // return inputColor;
    }
  

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, changeColor: this.changeColor }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
