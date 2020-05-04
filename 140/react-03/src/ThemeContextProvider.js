import React from 'react';
 
const ColorContext = React.createContext(null);
 
export default ColorContext;

// import React, { Component } from "react";
// const { Provider, Consumer } = React.createContext();

// class ThemeContextProvider extends Component {
    // state = {
    //     theme: "Day"
    //   };
//   render() {
//     return <Provider value={"Day"}>{this.props.children}</Provider>;
//   }
// }

// export { ThemeContextProvider, Consumer as ThemeContextConsumer };