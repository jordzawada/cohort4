// import React from 'react';

// const ColorContext = React.createContext(null);

// export default ColorContext;

import React, { Component } from "react";


export const time = {
   time1: "Day",
   toggleTime: function (){
   
    if (time.time1 === "Day"){
      time.time1="Night";
    } else {
     return time.time1="Day"
      console.log(time.time1);
    };
    
    
    // time.time1 === "Day" ? "Night" : "Day";
    return time.time1;
   },
}



// const ThemeContext = React.createContext(
//   time.time // default value
// );

// export default ThemeContext;
