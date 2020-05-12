// import React from 'react';

// const ColorContext = React.createContext(null);

// export default ColorContext;

import React from "react";


export const time = {
  //  time1: "Day",
   color1 : "black",
  //  toggleTime: function (){
   
  //   if (time.time1 === "Day"){
  //     time.time1="Night";
  //   } else {
  //    return time.time1="Day"
  //   };
  //   // time.time1 === "Day" ? "Night" : "Day";
  //   return time.time1;
  //  },
   
   changeColor: function (color){
    //  console.log(color);
    // console.log(time.color1);
    return time.color1=color;
    
    
   }
}



const ThemeContext = React.createContext(
  time.color1 // default value
);

export default ThemeContext;
