import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  
    state = {
      color1: "white",
    };
  

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
