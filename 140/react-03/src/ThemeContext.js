// import React from 'react';

// const ColorContext = React.createContext(null);

// export default ColorContext;

import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
// export const Theme = React.createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);

    this.toggleFontColour = () => {
      this.setState(state => {
        const newTheme= state.theme === "Day" ? "Night" : "Day";
        return {
          theme : newTheme
        };
      });
    };

    this.state = {
      theme: "Day",
      toggleFontColour: this.toggleFontColour,
    };
  }

  render() {
    return (
    <Provider value={this.state}>
      {this.props.children}
      </Provider>
      );
  }
}

// export default ThemeContextProvider;
export { ThemeContextProvider, Consumer as ThemeContextConsumer };
